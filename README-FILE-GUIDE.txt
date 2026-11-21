EMY MAANY WEBSITE — PROJECT FILE GUIDE
======================================

PROJECT OVERVIEW
----------------
This project is a static website built with HTML, CSS and vanilla JavaScript.
Keep the files in the project root exactly where they are. The service worker,
manifest, page links and image references expect these paths.

PAGE FILES
----------
index.html
  Home page structure: header/navigation, hero slider markup, introduction,
  services, counters and footer.

home.css
  Home page visual design: global home-page styling, header, sections,
  responsive rules and shared home-page components.

home.js
  Home page interactions that are not part of the showcase slider.

showcase.css
  Hero slider appearance only: slide layout, typography, product positioning,
  floating ingredient/decorative cutouts, transitions and responsive slider
  behavior.

showcase.js
  Hero slider behavior: slide switching, tab state, previous/next controls,
  keyboard navigation, touch swipe and autoplay.

work.html
  Our Work page structure: portfolio categories, gallery containers and
  project-viewer markup.

work.css
  Our Work page styling: portfolio cards, filters, gallery, viewer and
  responsive layout.

work.js
  Portfolio data and behavior: project collections, category filtering,
  gallery rendering and project viewer interactions.

contact.html
  Contact page structure: contact information and form markup.

contact.css
  Contact page styling and responsive layout.

contact.js
  Contact page form behavior and validation/interactions.

SHARED / SITE-WIDE FILES
------------------------
site-enhancements.js
  Shared site behavior: English/LTR enforcement, portrait preference for
  installed PWA, reading progress indicator, back-to-top button and counters.

pwa-install.css
  Styling for the install banner shown by supported browsers.

pwa-install.js
  PWA installation flow, iOS installation instructions and service-worker
  registration.

service-worker.js
  Offline cache, app-shell installation and network-first asset handling.
  Update CACHE_NAME whenever a deployment changes important cached assets.

manifest.webmanifest
  PWA name, icons, display mode, theme/background colors and orientation.

showcase.css / showcase.js are separate from home.css / home.js intentionally.
When changing the slider, start with the showcase files and the slider markup
inside index.html. Avoid moving or renaming these files unless all references
are updated.

IMAGE FOLDERS
-------------
Images/slider/
  Dedicated images and extracted cutout elements used by the hero slider.

Images/Cakes/
  Cake portfolio images.

Images/Decorations/
  Event decoration portfolio images.

Images/catering/
  Catering and food portfolio images.

Other image folders and logo/icon files are referenced by the relevant pages.
Do not rename image files casually: paths are referenced by HTML or JavaScript.

SAFE EDITING WORKFLOW
---------------------
1. Make a backup before editing.
2. For hero slider text, image composition or slide markup, inspect index.html.
3. For hero slider colors, layout, sizes, blur and animation styling, edit
   showcase.css.
4. For hero slider autoplay, arrows, tabs, keyboard or swipe behavior, edit
   showcase.js.
5. For portfolio projects, edit the collections data in work.js.
6. Keep CSS changes inside the relevant page stylesheet where possible.
7. Test Home, Our Work and Contact after edits.
8. Test desktop and mobile widths.
9. Deploy the complete project root; do not upload only one page stylesheet
   if it depends on shared files.

CODE ORGANIZATION
-----------------
CSS is formatted with one declaration per line and grouped rule blocks.
JavaScript is expanded into readable blocks and indented sections.
HTML is prettified with clear nesting. Existing file paths and asset folders
are retained so current links and PWA references continue to work.

IMPORTANT
---------
The code formatter was applied without intentionally changing the website
features or content. Still, always preview the site locally before deploying.
