---
name: Authority Light
colors:
  surface: '#fff8f7'
  surface-dim: '#f3d3cf'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2de'
  surface-container-highest: '#fbdbd7'
  on-surface: '#281715'
  on-surface-variant: '#5c403c'
  inverse-surface: '#3f2c29'
  inverse-on-surface: '#ffedea'
  outline: '#916f6b'
  outline-variant: '#e6bdb8'
  surface-tint: '#bf0715'
  primary: '#b70011'
  on-primary: '#ffffff'
  primary-container: '#dc2626'
  on-primary-container: '#fff6f5'
  inverse-primary: '#ffb4ab'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#005e8d'
  on-tertiary: '#ffffff'
  tertiary-container: '#0078b2'
  on-tertiary-container: '#f3f8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000b'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#cbe6ff'
  tertiary-fixed-dim: '#90cdff'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b71'
  background: '#fff8f7'
  on-background: '#281715'
  surface-variant: '#fbdbd7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
---

## Brand & Style

This design system is engineered for high-stakes B2B commerce, balancing a 25-year legacy of authority with a modern, high-performance interface. The personality is professional, decisive, and exceptionally clear. 

The aesthetic follows a **Modern Corporate** direction with a focus on high-clarity minimalism. It utilizes ample white space to reduce cognitive load during complex transactions, while using sharp, intentional red accents to guide the user's eye toward critical actions and brand markers. The goal is to evoke a sense of institutional stability and operational efficiency.

## Colors

The palette is anchored by a stark white primary background to maximize readability and "air" within the UI. 

- **Primary Red (#dc2626):** Reserved strictly for primary call-to-actions, brand identity, and critical status indicators. It must be used sparingly to maintain its signaling power.
- **Dark Slate (#0f172a):** Used for primary headings and UI text to ensure the highest accessibility rating and a sense of gravity.
- **Surface Tiers:** We use a subtle progression from White to Light Gray (#f8fafc) and Surface Container (#f1f5f9) to define functional zones without the need for heavy borders.

## Typography

The design system utilizes **Inter** exclusively to lean into its systematic, utilitarian nature. 

- **Hierarchy:** Use bold weights for headlines to establish a clear "scan-path" for professional users who need to find information quickly.
- **Readability:** Body text is set at 16px (md) for standard commerce flows, with 18px (lg) reserved for editorial or long-form insights.
- **Labels:** Use the semi-bold 12px label for all-caps section headers or utility navigation to provide contrast against standard body text.

## Layout & Spacing

The layout is based on a **12-column fixed grid** for desktop environments (max-width 1280px) to ensure data-heavy tables and commerce grids remain legible. 

- **Scaling:** On mobile, the system transitions to a single-column fluid layout with 16px side margins. 
- **Rhythm:** An 8px linear scale governs all padding and margins. Use larger gaps (48px+) between major sections to emphasize the clean, bright aesthetic.
- **Density:** For data-rich views (dashboards/inventories), reduce internal component padding to 12px (1.5 units) to maintain information density without clutter.

## Elevation & Depth

To maintain a clean and professional look, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Level 0:** Primary Background (#ffffff).
- **Level 1:** Surface Container (#f1f5f9). Use for grouping related content or sidebar backgrounds.
- **Borders:** Use 1px solid #e2e8f0 for card outlines and input fields. This provides structure without the "muddiness" of shadows.
- **Active State:** Only use a very soft, diffused shadow (0px 4px 12px rgba(15, 23, 42, 0.05)) on hovered cards or active dropdowns to indicate interactivity.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness profile. This slight rounding removes the harshness of a purely "sharp" grid while maintaining the disciplined, architectural feel required for B2B authority.

- **Standard Elements:** 4px (0.25rem) radius for buttons, input fields, and small chips.
- **Large Elements:** 8px (0.5rem) radius for cards and modal containers.
- **Exceptions:** Redacted or status dots remain circular (pill).

## Components

- **Buttons:**
  - **Primary:** Background #dc2626, Text #ffffff. No shadow. High-contrast and immediate.
  - **Secondary:** Border 1px #e2e8f0, Text #0f172a. Professional and quiet.
- **Input Fields:** Use #ffffff background with 1px #e2e8f0 border. On focus, change border color to #0f172a (not red) to maintain professional calm during data entry.
- **Cards:** White background with a 1px #e2e8f0 border. Avoid shadows unless the card is being dragged or is a temporary pop-over.
- **Chips:** Use #f1f5f9 background with #475569 text for neutral categories. For active filters, use a light red tint (#fef2f2) with #dc2626 text.
- **Data Tables:** Use a 1px horizontal-only border (#f1f5f9) to separate rows. Header row should have a #f8fafc background for clear separation from the body.