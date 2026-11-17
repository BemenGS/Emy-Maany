/* =========================================================
   EMY SWEETS — PORTFOLIO INTERACTIONS
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Preloader (kept for compatibility if the element is added later)
  window.addEventListener("load", () => {
    setTimeout(() => document.querySelector(".preloader")?.classList.add("done"), 450);
  });

  // Mobile navigation
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav?.classList.toggle("open", !expanded);
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }));

  // Reveal content as it enters the viewport
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  }

  // Portfolio content: each collection is a related group of photographs.
  // Replace these sample image URLs with Emy Maany' real event photographs.
  // Images of Mum's work :)
  const collections = {
    // ========== Event Decorations ==========
    decorations: [
      {
        title: "Wedding Receptions",
        kicker: "THE ART OF THE SETTING",
        description: "Elegant reception styling, tablescapes and unforgettable celebration spaces.",
        cover: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["The reception table", "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=90"],
          ["A romantic celebration", "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=90"],
          ["An intimate setting", "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90"],
          ["Floral table details", "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1800&q=90"]
        ]
      },
      // ================================================
      {
        title: "Floral & Finishing Touches",
        kicker: "FLOWERS & DETAILS",
        description: "The flowers, textures and thoughtful finishing touches that bring a room together.",
        cover: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["Floral styling", "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1800&q=90"],
          ["Soft floral palette", "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=90"],
          ["A beautiful detail", "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=90"]
        ]
      },
      // ===============================================
      {
        title: "Celebration Installations",
        kicker: "STATEMENT MOMENTS",
        description: "Beautiful focal points and bespoke styling for life's most special occasions.",
        cover: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["The celebration space", "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90"],
          ["Wedding atmosphere", "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=90"],
          ["A statement setting", "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=90"]
        ]
      }
    ],
    // ========== Cakes & Dessert Tables ==========
    cakes: [
      {
        title: "Wedding Cakes",
        kicker: "MADE FOR YOUR MOMENT",
        description: "Elegant centrepieces created to complement the style of your celebration.",
        cover: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["Classic celebration cake", "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=90"],
          ["An elegant cake design", "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1800&q=90"],
          ["Wedding cake details", "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1800&q=90"]
        ]
      },
      // ===============================================
      {
        title: "Birthday Cakes",
        kicker: "A SWEET STATEMENT",
        description: "Personalised cakes made to turn a birthday into a moment worth remembering.",
        cover: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["A birthday centrepiece", "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1800&q=90"],
          ["A celebration cake", "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=1800&q=90"],
          ["Sweet finishing details", "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1800&q=90"]
        ]
      },
      // ===============================================
      {
        title: "Dessert Tables",
        kicker: "THE SWEET COLLECTION",
        description: "A considered selection of desserts, styled beautifully for your guests.",
        cover: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["Dessert table selection", "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1800&q=90"],
          ["Beautiful sweet treats", "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1800&q=90"],
          ["A delicate dessert", "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=90"]
        ]
      }
    ],
    // ========== Catering ==========
    catering: [
      {
        title: "Fine Dining",
        kicker: "THE GATHERING TABLE",
        description: "Thoughtfully presented dishes and a refined dining experience for your guests.",
        cover: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["A fine dining table", "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90"],
          ["A beautifully served dish", "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=90"],
          ["The dining experience", "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1800&q=90"]
        ]
      },
      // ===============================================
      {
        title: "Buffet & Grazing",
        kicker: "ABUNDANCE, BEAUTIFULLY SERVED",
        description: "Generous spreads and inviting displays made for sharing and gathering.",
        cover: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["A colourful spread", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90"],
          ["Freshly prepared dishes", "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1800&q=90"],
          ["A table made for sharing", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1800&q=90"]
        ]
      },
      // ===============================================
      {
        title: "Canapés & Small Bites",
        kicker: "THE LITTLE DETAILS",
        description: "Beautifully prepared small bites that make every part of the occasion feel special.",
        cover: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1100&q=90",
        images: [
          ["Canapés for your guests", "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1800&q=90"],
          ["Fresh small plates", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90"],
          ["A carefully prepared bite", "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1800&q=90"]
        ]
      }
    ]
  };

  // Build each category's group cards from the collection data.
  Object.entries(collections).forEach(([category, groups]) => {
    const grid = document.querySelector(`[data-collection="${category}"]`);
    if (!grid) return;
    groups.forEach((group, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "collection-card reveal";
      card.setAttribute("aria-label", `Explore ${group.title}, ${group.images.length} photographs`);
      card.innerHTML = `
        <span class="collection-card-image">
          <img src="${group.cover}" alt="${group.title}" loading="lazy">
          <span class="collection-card-count">${String(group.images.length).padStart(2, "0")} PHOTOGRAPHS</span>
        </span>
        <span class="collection-card-info">
          <span>
            <span class="collection-card-kicker">${group.kicker}</span>
            <span class="collection-card-title">${group.title}</span>
          </span>
          <span class="collection-card-open" aria-hidden="true">↗</span>
        </span>`;
      card.addEventListener("click", () => openCollection(group, category));
      grid.appendChild(card);
      if (window.IntersectionObserver) observerForCard(card);
    });
  });

  // Reusable reveal observer for cards inserted after the page has loaded.
  function observerForCard(element) {
    if (!("IntersectionObserver" in window)) {
      element.classList.add("visible");
      return;
    }
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    cardObserver.observe(element);
  }

  // Collection viewer elements and state
  const viewer = document.getElementById("collectionViewer");
  const viewerTitle = document.getElementById("viewerTitle");
  const viewerCategory = document.getElementById("viewerCategory");
  const viewerDescription = document.getElementById("viewerDescription");
  const viewerImage = document.getElementById("viewerImage");
  const viewerCaption = document.getElementById("viewerCaption");
  const viewerCounter = document.getElementById("viewerCounter");
  const thumbnails = document.getElementById("viewerThumbnails");
  const categoryNames = { decorations: "EVENT DECORATIONS", cakes: "BESPOKE CAKES", catering: "EVENT CATERING" };
  let activeGroup = null;
  let activeIndex = 0;
  let lastFocusedElement = null;

  function renderViewerImage() {
    if (!activeGroup) return;
    const [caption, src] = activeGroup.images[activeIndex];
    viewerImage.src = src;
    viewerImage.alt = `${activeGroup.title} — ${caption}`;
    viewerCaption.textContent = caption;
    viewerCounter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(activeGroup.images.length).padStart(2, "0")}`;
    thumbnails.querySelectorAll(".viewer-thumb").forEach((button, index) => {
      button.classList.toggle("is-active", index === activeIndex);
      button.setAttribute("aria-pressed", String(index === activeIndex));
    });
  }

  function openCollection(group, category) {
    activeGroup = group;
    activeIndex = 0;
    lastFocusedElement = document.activeElement;
    viewerTitle.textContent = group.title;
    viewerCategory.textContent = categoryNames[category];
    viewerDescription.textContent = group.description;
    thumbnails.innerHTML = "";
    group.images.forEach(([caption, src], index) => {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "viewer-thumb";
      thumb.setAttribute("aria-label", `Show image ${index + 1}: ${caption}`);
      thumb.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
      thumb.addEventListener("click", () => {
        activeIndex = index;
        renderViewerImage();
      });
      thumbnails.appendChild(thumb);
    });
    renderViewerImage();
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("viewer-locked");
    viewer.querySelector(".viewer-close")?.focus();
  }

  function closeCollection() {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("viewer-locked");
    activeGroup = null;
    lastFocusedElement?.focus();
  }

  function stepImage(direction) {
    if (!activeGroup) return;
    activeIndex = (activeIndex + direction + activeGroup.images.length) % activeGroup.images.length;
    renderViewerImage();
  }

  viewer?.querySelectorAll("[data-viewer-close]").forEach(el => el.addEventListener("click", closeCollection));
  viewer?.querySelector(".viewer-close")?.addEventListener("click", closeCollection);
  viewer?.querySelector(".viewer-prev")?.addEventListener("click", () => stepImage(-1));
  viewer?.querySelector(".viewer-next")?.addEventListener("click", () => stepImage(1));

  // Keyboard support: Escape closes; arrow keys move between photographs.
  document.addEventListener("keydown", event => {
    if (!viewer?.classList.contains("is-open")) return;
    if (event.key === "Escape") closeCollection();
    if (event.key === "ArrowLeft") stepImage(-1);
    if (event.key === "ArrowRight") stepImage(1);
  });

  // Keep the page year current.
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
});
