# B5 Logistics

**Foundation en Route**

B5 Logistics is a responsive website for a trucking company that hauls bulk construction materials (cement, gravel, steel bars, sand, and lumber) from suppliers to construction sites across Luzon and Visayas, Philippines.

> **Note:** B5 Logistics is a fictional company. This site is a school project for **6INTROWEB** at Holy Angel University, built as the coded final of a Figma mockup.

**Live site:** https://gabli198.github.io/B5-Logistics/
**Design:** [Figma mockup](https://www.figma.com/design/cjO3Oi01jlMwpYPvz4LCz9/B5-LOGISTICS)

## Pages

| Page | What it shows |
| --- | --- |
| **Home** (`index.html`) | Hero, company intro, three service cards, fleet and warehouse stats, a promo video, and a call to action |
| **Services** (`services.html`) | Detailed write-ups of each service and a table of the 8 warehouses with their regions and fleet sizes |
| **Contact** (`contact.html`) | Company background, a contact form, and contact details |

## Features

- **Responsive layout.** Built mobile first, with breakpoints at 480px, 768px, and 1024px, plus a print stylesheet.
- **Hamburger menu** on phones, and a full navigation bar on tablet and desktop.
- **Coverage table** on larger screens, which turns into a stacked list on mobile.
- **Video** with MP4 and WebM sources and caption and description tracks.
- **Contact form** with a fieldset and legend, labeled inputs, and Submit and Reset buttons. JavaScript validates it. There is no back end yet, so messages are not actually sent.
- **Animated stats** that count up when they scroll into view.
- **Accessibility basics:** alt text on images, labeled form fields, a keyboard-operable menu with `aria-expanded`, visible focus outlines, and reduced-motion support.

## Built with

- HTML5
- CSS3 (Flexbox, Grid, media queries, custom properties, `@keyframes`)
- JavaScript
- Google Fonts: Inter and Roboto Mono

## Project structure

```
B5 Logistics/
├── index.html
├── services.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
└── media/
    ├── haul mp4.mp4
    ├── haul webm.webm
  
## Design system

| Color | Hex | Used for |
| --- | --- | --- |
| Black | `#020202` | Navigation, footer, headers |
| Safety green | `#3D8B37` | Buttons, accents, stats |
| Off-white | `#f1efe8` | Text on dark backgrounds, table rows |
| Concrete gray | `#8a8c88` | Borders and dividers |

## Credits

- Photos from free stock photos on coolors
- Designed and coded by Bondoc, Gabriel Liam O., WD-202, Holy Angel University School of Computing
