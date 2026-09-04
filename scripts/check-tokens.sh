#!/usr/bin/env bash
# Fail if a brand colour is written as a literal anywhere outside the token package.
#
# The palette lives in @clayspace/tokens and reaches the page as --cs-* custom
# properties. A colour typed into a component or stylesheet is invisible to a
# palette change, which is how the site and the admin drifted apart before the
# package existed.
#
# TWO forms are checked, because the first pass at this only looked for hex and
# missed a whole class:
#   1. hex          #EE552B
#   2. rgb / rgba   rgba(238, 85, 43, .18)   <- minifies to #ee552b2e, easy to miss
# For translucency use the generated alpha tokens, e.g. var(--cs-oxblood-a18).
#
# One exception: src/app/icon.svg is a standalone favicon document rendered by
# browser chrome. There is no page CSS context, so var() cannot resolve there.
set -uo pipefail

ROOTS=(src public/assets/scss)
HEX='#(EE552B|FE8441|FAF1E0|FFE890|F9B5C0|CFB5FF|ADC8CF|C0BA62|805D1B|404E41|614338|5D1509|85233C|3E2B59|263866|6B5D54|E9E0D6|F2EBE5|FFFCF6)'
RGB='rgba?\( *(238 *, *85 *, *43|254 *, *132 *, *65|250 *, *241 *, *224|255 *, *232 *, *144|128 *, *93 *, *27|64 *, *78 *, *65|97 *, *67 *, *56|93 *, *21 *, *9|133 *, *35 *, *60|62 *, *43 *, *89|38 *, *56 *, *102|107 *, *93 *, *84|233 *, *224 *, *214|242 *, *235 *, *229|255 *, *252 *, *246) *[,)]'

fail=0
for pat in "$HEX" "$RGB"; do
  hits=$(grep -rniE "$pat" "${ROOTS[@]}" --exclude=icon.svg 2>/dev/null || true)
  if [ -n "$hits" ]; then
    echo "Brand colours written as literals — use var(--cs-*) instead:"
    echo "$hits" | sed 's/^/  /'
    echo
    fail=1
  fi
done

# Every var(--cs-*) must resolve to something the package defines. An unresolved
# custom property makes the whole declaration invalid and the colour silently
# disappears — no error, no warning, just a missing border. This check exists
# because exactly that happened with a --cs-oxblood-a58 that was never defined.
PKG=node_modules/@clayspace/tokens/dist/tokens.css
if [ -f "$PKG" ]; then
  defined=$(grep -oE -- '--cs-[a-z0-9-]+' "$PKG" | sort -u)
  used=$(grep -rhoE -- 'var\(--cs-[a-z0-9-]+' "${ROOTS[@]}" 2>/dev/null | sed 's/var(//' | sort -u)
  missing=$(comm -23 <(echo "$used") <(echo "$defined"))
  if [ -n "$missing" ]; then
    echo "Referenced tokens that @clayspace/tokens does not define:"
    echo "$missing" | sed 's/^/  /'
    echo "  (an unresolved var() drops the declaration silently)"
    echo
    fail=1
  fi
fi

if [ "$fail" -eq 1 ]; then
  echo "The palette is @clayspace/tokens. Edit tokens.json there, not here."
  echo "For transparency use the alpha tokens, e.g. var(--cs-oxblood-a18)."
  exit 1
fi

echo "No brand colour literals outside the token package (hex or rgb/rgba)."
