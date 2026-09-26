# Cities Series — Commemorative Stamps (2026)

Six illustrated postage stamps in a mid-century travel poster style, each featuring an iconic landmark from a city Adriana has called home.

## Stamps

| City | Landmark | Palette |
|------|----------|---------|
| Guadalajara | Cathedral with papel picado | Terracotta, marigold, deep blue |
| Valencia | City of Arts and Sciences (Hemisfèric) | Mediterranean blue, white, orange |
| Montreal | Mount Royal with illuminated cross | Slate, brick red, snow white |
| Cincinnati | Roebling Suspension Bridge | Brick, river teal, cream |
| Portland | Mount Hood with evergreen forest | Forest green, mist gray, rose pink |
| San Francisco | Golden Gate Bridge with cable car | International orange, fog gray, bay blue |

## Files

```
stamps/
├── guadalajara.svg      # Source SVGs (400×500, flat vector + grain filter)
├── valencia.svg
├── montreal.svg
├── portland.svg
├── cincinnati.svg
├── san-francisco.svg
├── png/                 # Rendered PNGs at 1200px tall
│   ├── guadalajara.png
│   ├── ...
├── index.html           # Stamp sheet (3×2 grid, hover lift, click to enlarge)
├── generate.js          # Regenerates all SVGs from illustration data
├── render-pngs.js       # Renders SVGs → PNGs via Playwright + Chromium
└── README.md
```

## Regenerating PNGs

Requires Node.js and Playwright with Chromium installed.

```bash
# 1. Regenerate SVGs (if you edited generate.js)
node stamps/generate.js

# 2. Render PNGs at 1200px tall
node stamps/render-pngs.js
```

The render script uses Playwright's Chromium to screenshot each SVG at 1200px height with a transparent background. If Chromium is installed at a non-default path, edit the `executablePath` in `render-pngs.js`.

## Design system

- **Format**: 4:5 portrait (viewBox 0 0 400 500)
- **Border**: Circle-mask perforations (r=7, step=20px) on cream paper (#f5f0e8)
- **Illustration panel**: 336×332px with 0.75px frame
- **Grain**: SVG `feTurbulence` fractalNoise filter per stamp (unique seed)
- **Typography**: Playfair Display 700 (city name), Libre Franklin 400 (country, series line)
- **Series line**: "CITIES SERIES · 2026" at 9px
