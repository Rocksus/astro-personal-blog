# Design System Specification: High-End Editorial Engineering

## 1. Overview & Creative North Star: "The Digital Archivist"
The Creative North Star for this design system is **The Digital Archivist**. This concept blends the meticulous precision of a high-end engineering firm with the airy, expansive layout of a contemporary art monograph. It rejects the "busy" density of standard SaaS dashboards in favor of a deliberate, editorial cadence.

To break the "template" look, this system utilizes **Intentional Asymmetry**. Instead of centering all content, use the generous spacing scale to pull headlines to the far left while body text occupies a narrower, offset column. Overlap image containers with text blocks by 1.7rem (`spacing-5`) to create a sense of physical layering and depth.

---

## 2. Color Theory & Tonal Depth
The palette is rooted in high-contrast neutrals, utilizing Material Design naming conventions to ensure a systematic application across light and dark modes.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined through **Background Color Shifts**. For example, a main content area (`surface`) should transition into a sidebar or footer using `surface-container-low` (#f2f4f4).

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets.
- **Base Layer:** `surface` (#f9f9f9)
- **Secondary Sectioning:** `surface-container-low` (#f2f4f4)
- **Interactive/Floating Elements:** `surface-container-lowest` (#ffffff)
- **Deep Inset/Form Fields:** `surface-variant` (#dde4e5)

### The "Glass & Signature" Rule
For floating navigation or modals, use **Glassmorphism**. Apply `surface-container-lowest` at 80% opacity with a `24px` backdrop blur. To add "soul" to the engineering aesthetic, use a subtle linear gradient for primary CTAs: `primary` (#5f5e5e) to `primary-dim` (#535252).

---

## 3. Typography: Technical Precision
The typographic pairing reflects the brand's duality: **Space Grotesk** provides a technical, mono-spaced influence for structure, while **Inter** ensures elite readability for long-form data.

*   **Display (Space Grotesk):** Use `display-lg` (3.5rem) for hero statements. Apply `-0.04em` letter spacing to tighten the technical feel.
*   **Headlines (Space Grotesk):** `headline-md` (1.75rem) should always be sentence case to maintain an editorial, non-aggressive tone.
*   **Body (Inter):** `body-lg` (1rem) is the workhorse. Use a generous line height (1.6) to allow the "off-white" background to breathe through the text.
*   **Labels (Inter):** `label-md` (0.75rem) in All Caps with `0.1em` tracking for metadata and technical specs.

---

## 4. Elevation & Depth
In "The Digital Archivist," elevation is felt, not seen. We move away from heavy dropshadows toward **Tonal Layering**.

*   **The Layering Principle:** To highlight a card, place a `surface-container-lowest` card on a `surface-container` (#ebeeef) background. The delta in hex value creates a "soft lift."
*   **Ambient Shadows:** If a shadow is required for a floating menu, use the `on-surface` color (#2d3435) at 4% opacity with a 32px blur and an 8px Y-offset.
*   **The "Ghost Border" Fallback:** If a container requires a boundary for accessibility, use a `1px` stroke of `outline-variant` (#adb3b4) at **15% opacity**. High-contrast borders are forbidden.

---

## 5. Component Guidelines

### Buttons (The Precision Actuators)
*   **Primary:** Background: `primary` (#5f5e5e); Text: `on-primary` (#faf7f6). Shape: `DEFAULT` (4px). No border.
*   **Secondary:** Background: `transparent`; Border: Ghost Border (15% `outline-variant`); Text: `primary`.
*   **Tertiary:** Underlined `label-md` text with a 2px offset. No container.

### Input Fields
Avoid the "box" look. Use `surface-variant` (#dde4e5) for the background with a bottom-only stroke of `outline` (#757c7d) that animates to 2px on focus.

### Cards & Lists (The Divider-Free Rule)
Forbid 1px horizontal lines between list items. Use the **Spacing Scale**:
- Separate list items with `spacing-4` (1.4rem) of whitespace.
- Use a `surface-container-low` background on hover to indicate interactivity.

### Archive Specifics (The Data Grid)
For "The Digital Archivist," data grids should use `label-sm` for all content. Columns should be separated by whitespace alone, with the header row utilizing `surface-dim` (#d4dbdd) for a subtle "tabbed" appearance.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** use `spacing-12` (4rem) or `spacing-16` (5.5rem) between major sections to emphasize the editorial look.
*   **Do** use `primary-container` (#e5e2e1) as a subtle background for highlighted text fragments.
*   **Do** ensure the theme toggle transition is slow (300ms) to emphasize the "ink to paper" shift.

### Don't:
*   **Don't** use pure black (#000000) or pure white (#FFFFFF) except for the `surface-container-lowest` in light mode.
*   **Don't** use standard icons. Use "Fine-Line" icons (1px or 1.5px stroke) to match the `outline` tokens.
*   **Don't** center-align long-form text. Stick to the "Engineered Asymmetry" of left-aligned compositions.
*   **Don't** use shadows to solve hierarchy issues that can be solved with background tonal shifts.