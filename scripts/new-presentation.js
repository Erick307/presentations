#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const name = process.argv[2];
if (!name) {
  console.error('Usage: npm run new -- <deck-name>');
  process.exit(1);
}

const dir = path.join(__dirname, '..', 'decks', name);
if (fs.existsSync(dir)) {
  console.error(`Deck "${name}" already exists at ${dir}`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const title = name
  .split('-')
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join(' ');

const template = `---
marp: true
theme: custom
paginate: true
---

<!-- _class: lead -->

# ${title}

---

## Slide 2

- Point one
- Point two
`;

fs.writeFileSync(path.join(dir, 'slides.md'), template);
console.log(`Created decks/${name}/slides.md`);
