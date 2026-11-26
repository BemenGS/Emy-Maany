/* OUR WORK SCRIPT — portfolio collections, gallery rendering and viewer controls. */
/* =========================================================
   EMY SWEETS — PORTFOLIO INTERACTIONS
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    // Preloader (kept for compatibility if the element is added later)
    window.addEventListener("load", () => {
        setTimeout(() => document.querySelector(".preloader")?.classList.add("done"), 450);
    }
    );
    // Mobile navigation
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    toggle?.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        nav?.classList.toggle("open", !expanded);
    }
    );
    nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
    }
    ));
    // Reveal content as it enters the viewport
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            }
            );
        }
        , {
            threshold: 0.12
        }
        );
        document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    }
    else {
        document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    }
    // Portfolio content: each collection is a related group of photographs.
    // Replace these sample image URLs with Emy Sweets' real event photographs.
    //Images :)
    const collections = {
        decorations: [
        {
            title: "Wedding Receptions",
            kicker: "THE ART OF THE SETTING",
            description: "Elegant reception styling, tablescapes and unforgettable celebration spaces.",
            cover: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=90",
            images: [
            [ "Batman cake","Decorations/Wedding.jpeg"],
            ]
        }
        ,
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
        }
        ,
        {
            title: "Birth Events & Baby Showers",
            kicker: "STATEMENT MOMENTS",
            description: "Beautiful focal points and bespoke styling for life's most special occasions.",
            cover: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=90",
            images: [
            [ "Batman cake","Decorations/elephant .jpeg"],
            ]
        }
        ],
        // ========================================================================
        cakes: [
        {
            title: "Birthday Cakes : Boys",
            kicker: "Boys Corner",
            description: "Elegant centrepieces created to complement the style of your celebration.",
            cover: "Birthday Boys/simple cars 2.jpeg",
            images: [
            [ "Batman cake","Birthday Boys/batman.jpeg"],
            ["Ben 10 cake", "Birthday Boys/ben10.jpeg"],
            ["Dogs cake", "Birthday Boys/dogs.jpeg"],
            ["Cars cake", "Birthday Boys/simple cars.jpeg"],
            ["Cars cake 2", "Birthday Boys/simple cars 2.jpeg"],
            ["Animals cake", "Birthday Boys/animals.jpeg"],
            ["Bear cake", "Birthday Boys/bear cake.jpeg"],
            ["Bear cake 2", "Birthday Boys/bear cake2.jpeg"],
            ["Bear cake 2", "Birthday Boys/bear 3.jpeg"],
            ["Cars", "Birthday Boys/cars.jpeg"],
            ["Sun cake 2", "Birthday Boys/sun cake.jpeg"],
            ["Sun cake 2", "Birthday Boys/dinosaurs cake.jpeg"],
            ["Sun cake 2", "Birthday Boys/football.jpeg"],
            ["Sun cake 2", "Birthday Boys/baby boss.jpeg"],
            ]
        }
        ,
        {
            title: "Birthday Cakes : Girls",
            kicker: "Girls Corner",
            description: "Personalised cakes made to turn a birthday into a moment worth remembering.",
            cover: "Birthday Girls/Elsa 2.jpeg",
            images: [
            ["A birthday centrepiece", "Birthday Girls/butterfly.jpeg"],
            ["Sweet finishing details", "Birthday Girls/butterfly2.jpeg"],
            ["Sweet finishing details", "Birthday Girls/cake.jpeg"],
            ["Sweet finishing details", "Birthday Girls/pink teddy bear.jpeg"],
            ["Sweet finishing details", "Birthday Girls/pinky cake.jpeg"],
            ["Sweet finishing details", "Birthday Girls/birthday cake.jpeg"],
            ["Sweet finishing details", "Birthday Girls/Elsa.jpeg"],
            ["Sweet finishing details", "Birthday Girls/Elsa 2.jpeg"],
            ["Sweet finishing details", "Birthday Girls/girly cake.jpeg"],
            ["Sweet finishing details", "Birthday Girls/hello ketty.jpeg"],
            ["Sweet finishing details", "Birthday Girls/Stetch.jpeg"],
            ["Sweet finishing details", "Birthday Girls/stetch 2.jpeg"],
            ["Sweet finishing details", "Birthday Girls/Manuela.jpeg"],
            ["Sweet finishing details", "Birthday Girls/make-up.jpeg"],
            ["Sun cake 2", "Birthday Girls/mecky mouse.jpeg"],
            ["Sun cake 2", "Birthday Girls/duck.jpeg"],
            ["Sun cake 2", "Birthday Girls/Miramar.jpeg"],
            ["Sun cake 2", "Birthday Girls/moana.jpeg"],
            ]
        }
        ,
        {
            title: "Birthday Cakes : Adults",
            kicker: "Adults Corner",
            description: "A considered selection of desserts, styled beautifully for your guests.",
            cover: "Birthday Adults/italian cake.jpeg",
            images: [
            ["Beautiful sweet treats", "Birthday Adults/laptop.jpeg"],
            ["A delicate dessert", "Birthday Adults/luxury.jpeg"],
            ["A delicate dessert", "Birthday Adults/Strwaberry cake.jpeg"],
            ["A delicate dessert", "Birthday Adults/chocolate cake.jpeg"],
            ["Sweet finishing details", "Birthday Adults/white cake.jpeg"],
            ["Sweet finishing details", "Birthday Adults/italian cake.jpeg"],
            ["Sweet finishing details", "Birthday Adults/ice cream cake.jpeg"],
            ]
        }
        ,
        {
            title: "Valentine & Engagement Cakes",
            kicker: "The Love Collection",
            description: "A considered selection of desserts, styled beautifully for your Special Someone.",
            cover: "Valentine Cakes/Valentine 23.jpeg",
            images: [
            ["Dessert table selection", "Valentine Cakes/engagement.jpeg"],
            ["Dessert table selection", "Valentine Cakes/engagement 2.jpeg"],
            ["Dessert table selection", "Valentine Cakes/engagement 3.jpeg"],
            ["Dessert table selection", "Valentine Cakes/engagement 4.jpeg"],
            ["Dessert table selection", "Valentine Cakes/engagement 5.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentin .jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentin 2.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentin 3.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 4.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 5.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 6.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 7.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 8.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 9.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 10.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 11.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 12.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 13.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 14.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 15.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 16.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 17.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 18.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 19.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 20.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 21.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 22.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 23.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 24.jpeg"],
            ["Dessert table selection", "Valentine Cakes/Valentine 25.jpeg"],
           
            ]
        }
        ],
        // ========================================================================
        catering: [
        {
            title: "Wedding Catering",
            kicker: "Fine Catering",
            description: "Thoughtfully presented catering experience for your guests.",
            cover: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=90",
            images: [
            ["A fine dining table", "catering/chicken sandwichs.png"],
            ["A fine dining table", "catering/mini pizza .png"],
            
            ]
        }
        ,
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
        }
        ,
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
    }
    ;
    // Translate dynamic portfolio cards from their canonical English collection data.
    const translate = value => window.EmyI18n ? window.EmyI18n.t(value) : value;

    // Build each category's group cards from the collection data.
    function renderCollectionCards() {
      Object.entries(collections).forEach(([category, groups]) => {
        const grid = document.querySelector(`[data-collection="${category}"]`);
        if (!grid) return;
        grid.innerHTML = "";
        groups.forEach((group, index) => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "collection-card reveal";
            card.setAttribute("aria-label", `${translate("Explore")} ${translate(group.title)}, ${group.images.length} ${translate("photographs")}`);
            card.innerHTML = `
        <span class="collection-card-image">
          <img src="${group.cover}" alt="${translate(group.title)}" loading="lazy">
          <span class="collection-card-count">${String(group.images.length).padStart(2, "0")} ${translate("PHOTOGRAPHS")}</span>
        </span>
        <span class="collection-card-info">
          <span>
            <span class="collection-card-kicker">${translate(group.kicker)}</span>
            <span class="collection-card-title">${translate(group.title)}</span>
          </span>
          <span class="collection-card-open" aria-hidden="true">↗</span>
        </span>`;
            card.addEventListener("click", () => openCollection(group, category));
            grid.appendChild(card);
            if (window.IntersectionObserver) observerForCard(card);
        }
        );
      });
    }
    renderCollectionCards();
    // Rebuild translated cards whenever the visitor changes language.
    document.addEventListener("emy-language-change", () => {
        renderCollectionCards();
        if (activeGroup) {
            viewerTitle.textContent = translate(activeGroup.title);
            viewerCategory.textContent = translate(categoryNames[activeCategory]);
            viewerDescription.textContent = translate(activeGroup.description);
            renderViewerImage();
            renderViewerThumbnails();
        }
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
            }
            );
        }
        , {
            threshold: 0.08
        }
        );
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
    const categoryNames = {
        decorations: "EVENT DECORATIONS", cakes: "BESPOKE CAKES", catering: "EVENT CATERING"
    }
    ;
    let activeGroup = null;
    let activeCategory = "";
    let activeIndex = 0;
    let lastFocusedElement = null;
    function renderViewerImage() {
        if (!activeGroup) return;
        const [caption, src] = activeGroup.images[activeIndex];
        viewerImage.src = src;
        viewerImage.alt = `${translate(activeGroup.title)} — ${translate(caption)}`;
        viewerCaption.textContent = translate(caption);
        viewerCounter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(activeGroup.images.length).padStart(2, "0")}`;
        thumbnails.querySelectorAll(".viewer-thumb").forEach((button, index) => {
            button.classList.toggle("is-active", index === activeIndex);
            button.setAttribute("aria-pressed", String(index === activeIndex));
        }
        );
    }
    function openCollection(group, category) {
        activeGroup = group;
        activeCategory = category;
        activeIndex = 0;
        lastFocusedElement = document.activeElement;
        viewerTitle.textContent = translate(group.title);
        viewerCategory.textContent = translate(categoryNames[category]);
        viewerDescription.textContent = translate(group.description);
        renderViewerThumbnails();
        renderViewerImage();
        viewer.classList.add("is-open");
        viewer.setAttribute("aria-hidden", "false");
        document.body.classList.add("viewer-locked");
        viewer.querySelector(".viewer-close")?.focus();
    }
    function renderViewerThumbnails() {
        if (!activeGroup) return;
        thumbnails.innerHTML = "";
        activeGroup.images.forEach(([caption, src], index) => {
            const thumb = document.createElement("button");
            thumb.type = "button";
            thumb.className = "viewer-thumb";
            thumb.setAttribute("aria-label", `${translate("Show image")} ${index + 1}: ${translate(caption)}`);
            thumb.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
            thumb.addEventListener("click", () => {
                activeIndex = index;
                renderViewerImage();
            }
            );
            thumbnails.appendChild(thumb);
        }
        );
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
        const rtl = document.documentElement.dir === "rtl";
        if (event.key === "ArrowLeft") stepImage(rtl ? 1 : -1);
        if (event.key === "ArrowRight") stepImage(rtl ? -1 : 1);
    }
    );
    // Keep the page year current.
    document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
}
);
