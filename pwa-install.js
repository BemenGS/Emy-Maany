/* =========================================================
   EMY MAANY — PWA INSTALL EXPERIENCE
   Recreates the EgyCenter bottom install banner and platform
   guide modal, recoloured to the Emy Maany espresso/gold theme.
   ========================================================= */
(() => {
  "use strict";

  const root = document.documentElement;
  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /android/i.test(navigator.userAgent);
  if (isStandalone()) return;

  let deferredPrompt = null;
  let activePlatform = isIOS ? "ios" : isAndroid ? "android" : "windows";
  const dismissedKey = "emyMaanyInstallDismissed";
  const copy = {
    en: {
      banner: "Install Emy Maany", later: "Not now", install: "Install",
      title: "Install app", app: "Emy Maany",
      description: "Celebrations, Curated",
      cancel: "Cancel", got: "Got it",
      windows: [
        "Open this website in <b>Chrome</b> or <b>Edge</b> on your computer.",
        "Click the <b>install icon ⊕</b> at the right side of the address bar, or open the <b>⋮</b> menu and choose <b>Install Emy Maany</b>.",
        "Click <b>Install</b>. Emy Maany will be added to your desktop and Start menu."
      ],
      android: [
        "Open this website in <b>Chrome</b> on your Android phone or tablet.",
        "Tap the <b>⋮</b> menu at the top of the screen.",
        "Choose <b>Install app</b> or <b>Add to Home screen</b>, then tap <b>Install</b>.",
        "You will find the Emy Maany icon on your home screen."
      ],
      ios: [
        "Open this website in <b>Safari</b> on your iPhone or iPad.",
        "Tap the <b>Share</b> button (the square with the upward arrow).",
        "Scroll down and choose <b>Add to Home Screen</b>.",
        "Tap <b>Add</b>. The Emy Maany icon will appear on your home screen."
      ]
    },
    ar: {
      banner: "تثبيت تطبيق إيمي معاني", later: "ليس الآن", install: "تثبيت",
      title: "تثبيت التطبيق", app: "إيمي معاني",
      description: "تنسيق المناسبات والاحتفالات",
      cancel: "إلغاء", got: "حسنًا",
      windows: [
        "افتح الموقع باستخدام <b>Chrome</b> أو <b>Edge</b> على جهاز الكمبيوتر.",
        "اضغط على <b>أيقونة التثبيت ⊕</b> بجوار شريط العنوان، أو افتح قائمة <b>⋮</b> واختر <b>Install Emy Maany</b>.",
        "اضغط على <b>Install</b> لإضافة إيمي معاني إلى سطح المكتب وقائمة Start."
      ],
      android: [
        "افتح الموقع باستخدام <b>Chrome</b> على هاتفك أو جهازك اللوحي.",
        "اضغط على قائمة <b>⋮</b> أعلى الشاشة.",
        "اختر <b>Install app</b> أو <b>Add to Home screen</b> ثم اضغط <b>Install</b>.",
        "ستجد أيقونة إيمي معاني على الشاشة الرئيسية."
      ],
      ios: [
        "افتح الموقع باستخدام متصفح <b>Safari</b> على iPhone أو iPad.",
        "اضغط على زر المشاركة <b>Share</b> (المربع الذي بداخله سهم لأعلى).",
        "مرّر لأسفل واختر <b>Add to Home Screen</b>.",
        "اضغط <b>Add</b> وستظهر أيقونة إيمي معاني على الشاشة الرئيسية."
      ]
    }
  };

  const language = () => root.lang === "ar" ? "ar" : "en";
  const text = key => copy[language()][key];
  const platformLabel = { windows: "Windows", android: "Android", ios: "iPhone" };

  let banner;
  let modal;
  let list;
  let promptButton;

  function renderInstructions(platform) {
    activePlatform = platform;
    const data = copy[language()][platform];
    list.dir = language() === "ar" ? "rtl" : "ltr";
    list.innerHTML = data.map((item, index) =>
      `<li style="animation-delay:${index * 90}ms">${item}</li>`
    ).join("");
    modal.querySelectorAll("[data-platform]").forEach(button => {
      const selected = button.dataset.platform === platform;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function renderLanguage() {
    if (!banner || !modal) return;
    banner.querySelector(".pwa-install-title").textContent = text("banner");
    banner.querySelector(".pwa-install-dismiss").textContent = text("later");
    banner.querySelector(".pwa-install-button").textContent = text("install");
    modal.querySelector("h2").textContent = text("title");
    modal.querySelector(".pwa-app-name").textContent = text("app");
    modal.querySelector(".pwa-app-description").textContent = text("description");
    modal.querySelector(".pwa-modal-cancel").textContent = text("cancel");
    promptButton.textContent = text("got");
    renderInstructions(activePlatform);
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("pwa-modal-open");
    modal.setAttribute("aria-hidden", "true");
  }

  function openModal() {
    renderLanguage();
    modal.classList.add("is-open");
    document.body.classList.add("pwa-modal-open");
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector(".pwa-modal-cancel").focus();
  }

  function createInterface() {
    banner = document.createElement("aside");
    banner.className = "pwa-install-banner";
    banner.setAttribute("aria-label", "Install Emy Maany");
    banner.innerHTML = `
      <span class="pwa-install-title">${text("banner")}</span>
      <div class="pwa-install-actions">
        <button class="pwa-install-dismiss" type="button">${text("later")}</button>
        <button class="pwa-install-button" type="button">${text("install")}</button>
      </div>`;

    modal = document.createElement("div");
    modal.className = "pwa-install-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="pwa-modal-backdrop" data-modal-close></div>
      <section class="pwa-modal-card" role="dialog" aria-modal="true" aria-labelledby="pwa-modal-title" dir="ltr">
        <h2 id="pwa-modal-title">${text("title")}</h2>
        <div class="pwa-app-row">
          <img src="./icon-192.png" alt="Emy Maany logo" class="pwa-app-icon">
          <div><strong class="pwa-app-name">${text("app")}</strong><span class="pwa-app-description">${text("description")}</span></div>
        </div>
        <div class="pwa-platform-tabs" role="group" aria-label="Choose your device">
          <button type="button" data-platform="windows">Windows</button>
          <button type="button" data-platform="android">Android</button>
          <button type="button" data-platform="ios">iPhone</button>
        </div>
        <ol class="pwa-install-steps"></ol>
        <div class="pwa-modal-actions">
          <button class="pwa-modal-cancel" type="button">${text("cancel")}</button>
          <button class="pwa-modal-got" type="button">${text("got")}</button>
        </div>
      </section>`;
    list = modal.querySelector(".pwa-install-steps");
    promptButton = modal.querySelector(".pwa-modal-got");
    document.body.append(banner, modal);

    banner.querySelector(".pwa-install-dismiss").addEventListener("click", () => {
      try { sessionStorage.setItem(dismissedKey, "1"); } catch (_) {}
      banner.classList.add("is-hiding");
      window.setTimeout(() => banner.remove(), 450);
    });
    banner.querySelector(".pwa-install-button").addEventListener("click", openModal);
    modal.querySelectorAll("[data-platform]").forEach(button =>
      button.addEventListener("click", () => renderInstructions(button.dataset.platform))
    );
    modal.querySelectorAll("[data-modal-close], .pwa-modal-cancel").forEach(button =>
      button.addEventListener("click", closeModal)
    );
    promptButton.addEventListener("click", async () => {
      if (deferredPrompt && activePlatform !== "ios") {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        deferredPrompt = null;
        if (result && result.outcome === "accepted") {
          closeModal();
          banner.remove();
        }
      } else {
        closeModal();
      }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
    document.addEventListener("emy-language-change", renderLanguage);
    renderInstructions(activePlatform);
    window.setTimeout(() => banner.classList.add("is-visible"), 900);
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
  });
  window.addEventListener("appinstalled", () => {
    banner?.remove();
    closeModal();
  });

  try {
    if (sessionStorage.getItem(dismissedKey) === "1") return;
  } catch (_) {}

  window.addEventListener("load", () => {
    if (!isStandalone()) createInterface();
  }, { once: true });

  // Register the PWA service worker only on secure origins.
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").catch(error =>
        console.warn("Emy Maany service worker registration failed:", error)
      );
    }, { once: true });
  }
})();
