# Font attribution & licence status

**Resolved 4 September 2026. Nothing bundled here is unlicensed.**

The site previously shipped 217 font files across six named families, two of
which blocked redistribution. It now ships **one self-hosted family**; the rest
are Google Fonts fetched by `next/font`.

---

## Self-hosted

### Apfel Grotezk — the brand face

- **Files:** 8 (`.woff` + `.woff2`, four weights)
- **Foundry:** Collletttivo — Luigi Gorlero
- **Licence:** SIL Open Font License 1.1 — redistribution permitted
- **Licence text:** `public/assets/fonts/ApfelGrotezk-LICENSE.txt` ✓

The typeface specified by the R3 brand guide. Kept because it is both the brand
face and unambiguously clear to redistribute.

## Fetched by `next/font/google`

Inter, Besley, Space Grotesk, Playfair Display, Satisfy, Teko, Phudu, Poppins
and Onest — all Google Fonts under the SIL Open Font License, subset at build
time. No obligation beyond the OFL, which permits this use.

**Space Grotesk** does double duty: it is the substitute for every family
removed below, chosen as the closest Google-hosted match to Apfel Grotezk.

---

## Removed, and why

| Family | Files | Why it went |
|---|---|---|
| **Font Awesome Pro** | 6 + a 456 KB stylesheet | Pro-only `fa-light` was in use. Paid, per-seat, not cleared for redistribution |
| **Platform** | 24 | Commercial Type, licensed per-domain |
| **Mango Grotesque** | 36 | Foundry and terms never identified |
| **Clash Display** | 30 | Fontshare terms permit use, but the licence text was never shipped |
| **Dirtyline** | 2 | Display face, terms never identified; faces like it are frequently personal-use only |

**96 font files and a 456 KB stylesheet removed.** Every `font-family`
declaration that referenced them now resolves to Space Grotesk through the
`$font-family` map in `public/assets/scss/utils/_typography.scss`.

### Font Awesome deserves a note

The entire site rendered **three icons** — a close cross and two chevrons. For
that it carried a 456 KB stylesheet, six font files, and an unresolved Pro
licence. Two of the usages were on `fa-light`, a weight Font Awesome *Free*
does not include, so even downgrading to Free would not have covered them.

They are now inline SVG in `src/components/clayspace/Icons.tsx`. No licence, no
network request, no font-loading flash, and they inherit `currentColor`, so the
existing button styles needed no change.

---

## Verification

Run from the repository root:

```bash
grep -rl 'Font Awesome' public --include='*.css' | wc -l
find public -iname '*Platform*' -o -iname '*Mango*' -o -iname '*Clash*' -o -iname '*dirtyline*' | wc -l
ls public/assets/fonts/
```

Expected: `0`, `0`, and Apfel Grotezk plus its licence text.

## What this means for distribution

**Nothing here blocks making this repository public, or deploying to a public
domain.** The one self-hosted family is OFL with its licence alongside;
everything else is Google-hosted OFL.

That was previously the stated blocker for going public. It no longer applies —
though the repository stays private for a separate reason: it is the
customer-facing half of an estate whose other half holds payroll and ledger data.
