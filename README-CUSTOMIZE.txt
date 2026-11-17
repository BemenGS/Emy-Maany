EMY MAANY - UPDATE GUIDE
========================

WHAT WAS ADDED
- Sticky header on all three pages.
- Reading progress bar at the very top of every page.
- Back-to-top floating button.
- English / Arabic language toggle (common navigation, section labels and counter labels).
- Animated experience counters on the home page, directly after "The Beauty is in Every Detail".
- Shared code is in site-enhancements.js; shared styling is appended to home.css, work.css and contact.css.

EDITING PORTFOLIO GROUPS (WORK PAGE)
-----------------------------------
Open work.js and find: const collections = {

There are three category arrays:
  decorations: [ ... ]
  cakes: [ ... ]
  catering: [ ... ]

Each object inside an array is one event/project group. For every group:
- title: title shown on the card and in the viewer.
- kicker: small category label.
- description: short group description.
- cover: image URL used on the collection card.
- images: array of [caption, image URL] pairs shown in the gallery.

To add a project, copy one complete object inside the relevant category array, change its title/description, and add your own image URLs.
To add a photo to an existing project, add another ["Photo caption", "IMAGE_URL"] item to its images array.
Use direct public image URLs or upload images to the project (for example in an assets folder) and use relative paths such as "assets/decorations/event-01.jpg".
The cover image should also be one of the images in the group.

COUNTERS
--------
On index.html, edit the three data-count values:
11 = cake/sweets experience years
1.5 = decoration experience years
1000 = customers
The data-suffix values control the plus sign.

LANGUAGE
--------
The language toggle and current English-to-Arabic text map are in site-enhancements.js.
Add a translation by adding the exact English text as a key and its Arabic equivalent as the value in the translations object.
Some headings contain nested emphasis/line-break elements and require separate translation entries or markup-specific handling.

DEPLOY
------
Upload the changed/new files to the same paths in GitHub, commit the changes, and wait for Vercel to finish a Ready deployment.
