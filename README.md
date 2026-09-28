# Presentations

Markdown-based slide decks built with [Marp](https://marp.app/).

## Setup

```bash
npm install
```

## Create a new deck

```bash
npm run new -- my-deck-name
```

This creates `decks/my-deck-name/slides.md` from a template.

## Preview while editing

Recommended: install the **Marp for VS Code** extension and open any
`slides.md` file for a live preview pane. Or use the CLI:

```bash
npm run watch -- decks/my-deck-name/slides.md
```

## Export for presenting

```bash
npm run build -- decks/my-deck-name/slides.md   # -> HTML (open in any browser, arrow keys to navigate)
npm run pdf -- decks/my-deck-name/slides.md     # -> PDF
npm run pptx -- decks/my-deck-name/slides.md    # -> PowerPoint
```

Output files land next to the source `slides.md`.

## Structure

- `decks/<name>/slides.md` — one folder per presentation
- `themes/custom.css` — shared Marp theme applied to all decks
- `scripts/new-presentation.js` — scaffolds a new deck

## Notes

- Exported HTML/PDF/PPTX files are gitignored — only source markdown and
  assets are tracked.
- Reference: [Marp Markdown syntax](https://marpit.marp.app/markdown)
