# Darwin 1942 Design System — Conventions

**Aesthetic**: Dark, cinematic WWII documentary. All components are designed for dark/black backgrounds. Never place these components on white or light surfaces without a containing dark section.

## Required context

Wrap all components in a dark background. The design system ships `globals.css` with utility classes and CSS custom properties; ensure `darwin1942-design-system/styles` is imported in your app.

```jsx
import 'darwin1942-design-system/styles';
```

## Component composition

The `HeroSection` is the primary composition surface — it assembles every other component into a full-bleed cinematic hero. Prefer composing via `HeroSection` over assembling parts individually.

For standalone use of the smaller primitives (`Button`, `PullQuote`, `Attribution`, `Eyebrow`, `ArchiveCaption`), always place them inside a dark container (`background: #000` or `background: #1a1a1a`).

## Color tokens

| Token | Value | Use |
|---|---|---|
| `paper` | `#FDFDF9` | page background (light mode, rare) |
| `ivory` | `#E1D6C6` | pull quotes, secondary text on dark |
| `crimson` | `#910E1A` | primary CTA buttons, accents |

## Typography

- **Display / headings**: Oswald (loaded via Google Fonts in `globals.css`) — used for eyebrow, attribution, button labels
- **Quotes / editorial**: Cormorant Garamond — used for `PullQuote` in italic weight

## Key prop patterns

- `Button` with `variant="primary"` → crimson fill; `variant="secondary"` → ghost border
- `Button` renders as `<a>` when `href` is set; as `<button>` otherwise
- `LogoBrand` requires a `src` prop pointing to either `/assets/logo-white.png` (for dark backgrounds) or `/assets/logo-dark.png` (for the paper/light background variant)
- `HeroSection.heroImage` should be a full-bleed archival photo; the component applies grayscale + sepia + dark overlay automatically
- `ArchiveCaption` is absolutely positioned and must be inside a `position: relative` parent

## Asset paths

Logo and hero image assets live in `/assets/` and are served statically. Reference them as:
- `/assets/logo-white.png` — white logo for dark backgrounds
- `/assets/logo-dark.png` — dark/muted logo for the paper-background variant
- `/assets/hero.jpg` — archival Darwin Harbour wartime photograph
