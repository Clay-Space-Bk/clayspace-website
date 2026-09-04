# Clay Space typography

**Apfel Grotezk** — Collletttivo, designed by Luigi Gorlero.
SIL Open Font License 1.1 (`ApfelGrotezk-LICENSE.txt` in this directory).

Installed and live. Declared in `src/app/clayspace-brand.scss`, served straight
out of `public/`, scoped to `.cs-brand`.

## Weights

The guide's four cuts, mapped to CSS weights:

| File                      | CSS weight | Guide name      |
|---------------------------|-----------|-----------------|
| ApfelGrotezk-Regular      | 400       | Regular         |
| ApfelGrotezk-Mittel       | 500       | Mittel (medium) |
| ApfelGrotezk-Fett         | 700       | Fett (Heavy)    |
| ApfelGrotezk-Satt         | 900       | Satt (Black)    |

Each ships as `.woff2` with a `.woff` fallback.

The stylesheets also ask for weight 600 in places. With no 600 file, CSS matching
resolves it upward to Fett — a real cut, not a synthesised one. Satt is
installed but nothing currently calls for 800–900; it's there when a heavier
display treatment is wanted.

## Not installed

`ApfelGrotezk-Brukt` is the family's fourth published style (a distressed cut).
It isn't part of the four the brand guide specifies, so it wasn't copied in —
it's still in the upstream package if it's ever wanted.

## Alternates

If Apfel Grotezk ever needs replacing, the deck names **Unbounded** (Google
Fonts) and **Nacelle** (Dot Colon).
