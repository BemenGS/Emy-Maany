/* =========================================================
   EMY MAANY — BILINGUAL LANGUAGE SYSTEM (EN / AR)
   English is the source language. Arabic strings live here.
   Language preference is independent from the color theme.
   ========================================================= */
(() => {
  "use strict";

  const STORAGE_KEY = "emy-maany-language";
  const translations = {
  "Home": "الرئيسية",
  "Our Work": "أعمالنا",
  "Contact": "تواصل معنا",
  "Dark": "داكن",
  "Light": "فاتح",
  "Open navigation": "فتح القائمة",
  "Close navigation": "إغلاق القائمة",
  "Switch to dark mode": "التبديل إلى الوضع الداكن",
  "Switch to light mode": "التبديل إلى الوضع الفاتح",
  "Featured creations": "أبرز إبداعاتنا",
  "Main navigation": "القائمة الرئيسية",
  "Choose a featured category": "اختر إحدى الفئات المميزة",
  "Previous slide": "الشريحة السابقة",
  "Next slide": "الشريحة التالية",
  "Back to top": "العودة إلى الأعلى",
  "Close collection": "إغلاق المجموعة",
  "Previous image": "الصورة السابقة",
  "Next image": "الصورة التالية",
  "Choose an image": "اختر صورة",
  "Explore": "استكشف",
  "photographs": "صور",
  "Show image": "عرض الصورة",
  "THE CENTREPIECE": "تحفة تحتل مركز الاحتفال",
  "Wedding": "حفلات الزفاف",
  "Cakes.": "والكعكات.",
  "Elegant details, delicate florals and a centrepiece made to be remembered.": "تفاصيل أنيقة، وزهور رقيقة، وكعكة استثنائية تبقى في الذاكرة.",
  "DISCOVER MORE": "اكتشفوا المزيد",
  "MADE UNIQUELY YOURS": "صُممت خصيصًا لكم",
  "LITTLE MOMENTS, BIG MAGIC": "لحظات صغيرة، وسحر كبير",
  "Cake": "تورتة",
  "Boy.": "ولد.",
  "Playful characters, joyful colours and a cake made just for him.": "شخصيات مرحة وألوان مبهجة وكعكة صُممت خصيصًا له.",
  "A WORLD OF WONDER": "عالم من البهجة",
  "YOUR DAY, YOUR FAIRYTALE": "يومكم، وحكايتكم الساحرة",
  "Girl.": "للبنت.",
  "Sweet colours, lovely characters and a cake made just for her.": "ألوان رقيقة وشخصيات محببة وكعكة أُعدّت خصيصًا لها.",
  "SWEET DETAILS, FOREVER": "تفاصيل حلوة لا تُنسى",
  "THE TABLE, THOUGHTFULLY SET": "مائدة أُعدّت بعناية",
  "Fine": "ضيافة",
  "Catering.": "ضيافة.",
  "Delicious details and inviting bites, prepared for sharing.": "مذاقات شهية وتفاصيل مدروسة، أُعدّت لتجمع الأحبة.",
  "PREPARED TO BE SHARED": "أُعدّت لتُشارك",
  "THE SETTING FOR YOUR STORY": "أجواء تليق بحكايتكم",
  "Event": "مناسبة",
  "Decor.": "ديكورات.",
  "Event Decor.": "ديكورات المناسبات",
  "Event Decoration": "ديكورات المناسبات",
  "Event Decorations": "ديكورات المناسبات",
  "Atmosphere, thoughtful styling and beautiful details in every corner.": "أجواء آسرة وتنسيق متقن وتفاصيل جميلة في كل زاوية.",
  "EVERY DETAIL IN ITS PLACE": "لكل تفصيلة مكانها",
  "WEDDING": "زفاف",
  "BIRTHDAY BOY": "عيد ميلاد صبي",
  "BIRTHDAY GIRL": "عيد ميلاد فتاة",
  "CATERING": "ضيافة",
  "DECOR": "زينة",
  "CAKES · CATERING · EVENT STYLING": "كعكات · ضيافة · تنسيق مناسبات",
  "A COMPLETE CELEBRATION HOUSE": "وجهتكم المتكاملة للاحتفالات",
  "The Beauty is in Every Detail.": "الجمال يكمن في كل تفصيلة.",
  "At Emy Maany, we believe the most Memorable Occasions are the ones where everything Feels Effortlessly Considered.": "في إيمي معاني، نؤمن بأن أجمل المناسبات وأكثرها رسوخًا في الذاكرة هي تلك التي تنسجم فيها كل التفاصيل بتناغم وعناية تبدوان في غاية السلاسة.",
  "We bring Event Styling, Bespoke Cakes and Thoughtful Catering under one Creative Roof — shaping a Seamless Experience that Feels Personal, polished and Entirely Yours.": "نجمع تنسيق المناسبات والكعكات المصممة خصيصًا والضيافة الراقية تحت سقف إبداعي واحد، لنصنع تجربة متكاملة تنبض بالخصوصية والرقي وتعكس ذوقكم.",
  "Contact ↗": "تواصلوا معنا ↗",
  "Years of Cake & Sweets Experience": "سنوات من الخبرة في الكعكات والحلويات",
  "Years of Event Decorations Experience": "سنوات من الخبرة في تزيين المناسبات",
  "Happy Customers": "عملاء سعداء",
  "WHAT WE DO": "ما نقدمه لكم",
  "One vision. Every detail.": "رؤية واحدة. وكل التفاصيل.",
  "All the Elements of an Extraordinary Event, Thoughtfully Brought Together.": "كل عناصر المناسبة الاستثنائية، في تناغم أُعدّ بعناية.",
  "01 / THE SETTING": "01 / الأجواء",
  "↗": "↗",
  "Event décor": "تنسيق ديكورات المناسبات",
  "Atmosphere, Styling and Beautiful spaces that set the scene.": "أجواء آسرة وتنسيق أنيق ومساحات جميلة ترسم ملامح مناسبتكم.",
  "02 / THE CENTREPIECE": "02 / التحفة الرئيسية",
  "Bespoke cakes": "كعكات مصممة خصيصًا",
  "Distinctive creations made to be Admired, Shared and Remembered.": "إبداعات متفردة تستحق الإعجاب والمشاركة والبقاء في الذاكرة.",
  "03 / THE TABLE": "03 / المائدة",
  "Fine catering": "ضيافة راقية",
  "Delicious Details and Inviting Tables For Every Kind Of Gathering.": "تفاصيل شهية وموائد ترحيبية تليق بمختلف مناسباتكم.",
  "THE EMY MAANY PROMISE": "وعد إيمي معاني",
  "Not simply An Event. A Feeling That Stays.": "ليست مجرد مناسبة، بل إحساس يدوم.",
  "Let's take a look at Our Work ↗": "اكتشفوا أعمالنا ↗",
  "EMY MAANY": "إيمي معاني",
  "Thoughtfully Made. Beautifully Remembered.": "صُنعت بعناية، لتبقى في الذاكرة بجمالها.",
  "Thoughtfully made. Beautifully remembered.": "صُنعت بعناية، لتبقى في الذاكرة بجمالها.",
  "© Emy Maany": "© إيمي معاني",
  "CREATED BY Bemen_GS": "تصميم وتطوير Bemen_GS",
  "Our Work | Emy Maany": "أعمالنا | إيمي معاني",
  "THE PORTFOLIO": "معرض أعمالنا",
  "Made With Care. Remembered Forever.": "صُنعت بعناية، لتُذكر إلى الأبد.",
  "Three Beautiful Ingredients. One Seamless Celebration.": "ثلاثة عناصر من الجمال، واحتفال متكامل.",
  "A CURATED COLLECTION / EMY MAANY": "مختارات بعناية / إيمي معاني",
  "01 — THE SETTING": "01 — الأجواء",
  "01 / 03": "01 / 03",
  "Event Decorations.": "تنسيق ديكورات المناسبات.",
  "We Transform Spaces into Atmospheres — from Intimate Tablescapes to Statement Installations. Every Colour, Texture and Finishing Touch has a Purpose.": "نحوّل المساحات إلى أجواء استثنائية، من تنسيقات الموائد الحميمة إلى التجهيزات اللافتة. لكل لون وملمس ولمسة نهائية غاية مدروسة.",
  "02 — THE CENTREPIECE": "02 — التحفة الرئيسية",
  "02 / 03": "02 / 03",
  "Bespoke cakes.": "كعكات مصممة خصيصًا.",
  "Designed around your occasion and finished with an eye for detail. Our cakes bring together beautiful presentation and a delicious centre.": "نصمم كعكاتنا لتنسجم مع مناسبتكم، ونعتني بأدق تفاصيلها. تجمع إبداعاتنا بين التقديم الأنيق والمذاق الشهي.",
  "03 — THE TABLE": "03 — المائدة",
  "03 / 03": "03 / 03",
  "Thoughtful Catering.": "ضيافة مدروسة.",
  "From graceful grazing tables to a beautifully presented menu, we make the food part of the occasion — generous, considered and full of flavour.": "من موائد الضيافة المتنوعة إلى قوائم الطعام المقدمة بأناقة، نجعل الطعام جزءًا أصيلًا من روعة المناسبة، بسخاء وعناية ومذاق غني.",
  "THE COLLECTION": "المجموعة",
  "Project Title": "عنوان المشروع",
  "YOUR OCCASION, YOUR STORY": "مناسبتكم، حكايتكم",
  "Shall We Make it": "ما رأيكم أن نجعلها",
  "Unforgettable?": "لا تُنسى؟",
  "Start A Conversation": "ابدأوا حديثًا معنا",
  "Wedding Receptions": "حفلات واستقبالات الزفاف",
  "THE ART OF THE SETTING": "فن تنسيق الأجواء",
  "Elegant reception styling, tablescapes and unforgettable celebration spaces.": "تنسيقات استقبال أنيقة وموائد متقنة ومساحات احتفالية لا تُنسى.",
  "Floral & Finishing Touches": "الزهور واللمسات النهائية",
  "FLOWERS & DETAILS": "زهور وتفاصيل",
  "The flowers, textures and thoughtful finishing touches that bring a room together.": "زهور وملامس ولمسات نهائية مدروسة تمنح المكان تناغمه الخاص.",
  "Birth Events & Baby Showers": "احتفالات استقبال المواليد",
  "STATEMENT MOMENTS": "لحظات استثنائية",
  "Beautiful focal points and bespoke styling for life's most special occasions.": "عناصر محورية جميلة وتنسيقات مصممة خصيصًا لأهم مناسبات الحياة.",
  "Birthday Cakes : Boys": "كعكات أعياد ميلاد الصبيان",
  "MADE FOR YOUR MOMENT": "صُنعت للحظة مميزة",
  "Elegant centrepieces created to complement the style of your celebration.": "كعكات أنيقة صُممت لتنسجم مع طابع احتفالكم.",
  "Birthday Cakes : Girls": "كعكات أعياد ميلاد الفتيات",
  "A SWEET STATEMENT": "تعبير حلو ومميز",
  "Personalised cakes made to turn a birthday into a moment worth remembering.": "كعكات مخصصة تحوّل عيد الميلاد إلى لحظة تستحق أن تبقى في الذاكرة.",
  "Special Events": "مناسبات خاصة",
  "THE SWEET COLLECTION": "مجموعة من الإبداعات الحلوة",
  "A considered selection of desserts, styled beautifully for your guests.": "تشكيلة مختارة بعناية من الحلويات، بتقديم أنيق لضيوفكم.",
  "Fine Dining": "موائد راقية",
  "THE GATHERING TABLE": "مائدة تجمع الأحبة",
  "Thoughtfully presented dishes and a refined dining experience for your guests.": "أطباق مقدمة بعناية وتجربة ضيافة راقية لضيوفكم.",
  "Buffet & Grazing": "بوفيه وموائد ضيافة",
  "ABUNDANCE, BEAUTIFULLY SERVED": "وفرة بتقديم أنيق",
  "Generous spreads and inviting displays made for sharing and gathering.": "تشكيلات سخية وعروض شهية صُممت للمشاركة والاجتماع.",
  "Canapés & Small Bites": "مقبلات ولقيمات صغيرة",
  "THE LITTLE DETAILS": "تفاصيل صغيرة",
  "Beautifully prepared small bites that make every part of the occasion feel special.": "لقيمات صغيرة أُعدّت بأناقة لتمنح كل لحظة في مناسبتكم طابعًا مميزًا.",
  "Batman cake": "كعكة باتمان",
  "Floral styling": "تنسيق الزهور",
  "Soft floral palette": "ألوان زهرية هادئة",
  "A beautiful detail": "تفصيلة جميلة",
  "Ben 10 cake": "كعكة بن تن",
  "Dogs cake": "كعكة الكلاب",
  "Cars cake": "كعكة السيارات",
  "Cars cake 2": "كعكة السيارات الثانية",
  "Animals cake": "كعكة الحيوانات",
  "Bear cake": "كعكة الدب",
  "Bear cake 2": "كعكة الدب الثانية",
  "Cars": "السيارات",
  "Sun cake 2": "كعكة الشمس",
  "A birthday centrepiece": "كعكة عيد ميلاد مميزة",
  "Sweet finishing details": "لمسات حلوة متقنة",
  "Dessert table selection": "تشكيلة مائدة الحلويات",
  "Beautiful sweet treats": "حلويات شهية وجميلة",
  "A delicate dessert": "حلوى رقيقة",
  "A fine dining table": "مائدة طعام راقية",
  "A beautifully served dish": "طبق مقدم بأناقة",
  "The dining experience": "تجربة ضيافة راقية",
  "A colourful spread": "تشكيلة غنية بالألوان",
  "Freshly prepared dishes": "أطباق طازجة أُعدّت بعناية",
  "A table made for sharing": "مائدة تجمع الأحبة",
  "Canapés for your guests": "مقبلات لضيوفكم",
  "Fresh small plates": "أطباق صغيرة طازجة",
  "A carefully prepared bite": "لقمة أُعدّت بعناية",
  "EVENT DECORATIONS": "تنسيق ديكورات المناسبات",
  "BESPOKE CAKES": "كعكات مصممة خصيصًا",
  "EVENT CATERING": "ضيافة المناسبات",
  "PHOTOGRAPHS": "صور",
  "Contact | Emy Maany": "تواصل معنا | إيمي معاني",
  "LET'S BEGIN SOMETHING BEAUTIFUL": "لنبدأ معًا حكاية جميلة",
  "Your Moment Starts Here.": "لحظتكم المميزة تبدأ من هنا.",
  "Tell us a little about the Celebration you're Imagining. We'd love to hear from you.": "أخبرونا قليلًا عن المناسبة التي تتخيلونها. يسعدنا أن نستمع إلى أفكاركم ونساعدكم على تحويلها إلى واقع.",
  "FIND YOUR WAY TO US ↓": "تواصلوا معنا ↓",
  "THE FIRST HELLO": "البداية بتحية",
  "Good Things Begin with a Conversation.": "كل الأشياء الجميلة تبدأ بحوار.",
  "For Event Enquiries, Collaborations .": "للاستفسارات الخاصة بالمناسبات وفرص التعاون.",
  "01": "01",
  "FOLLOW ALONG": "تابعونا",
  "Facebook": "فيسبوك",
  "Visit our page ↗": "زوروا صفحتنا ↗",
  "02": "02",
  "A LITTLE VISUAL INSPIRATION": "نافذة من الإلهام البصري",
  "Instagram": "إنستغرام",
  "Explore our feed ↗": "تصفحوا منشوراتنا ↗",
  "03": "03",
  "LET'S TALK DETAILS": "لنتحدث عن التفاصيل",
  "WhatsApp": "واتساب",
  "Start a chat ↗": "ابدأوا محادثة ↗",
  "A NOTE FROM EMY MAANY": "رسالة من إيمي معاني",
  "Every Celebration Begins With An Idea. Share Yours With Us, And Let's Turn It Into Something Worth": "كل احتفال يبدأ بفكرة. شاركونا فكرتكم، ودعونا نحولها إلى شيء يستحق أن يبقى في",
  "Emy Maany | Celebrations, Curated": "إيمي معاني | احتفالات بتفاصيل منتقاة",
  "Emy Maany — considered celebrations, beautiful details, unforgettable moments.": "إيمي معاني — احتفالات مدروسة، وتفاصيل جميلة، ولحظات لا تُنسى.",
  "Explore Emy Maany event décor, bespoke cakes and catering.": "اكتشفوا تزيين المناسبات والكعكات المصممة خصيصًا والضيافة الراقية من إيمي معاني.",
  "Contact Emy Maany to begin planning your celebration.": "تواصلوا مع إيمي معاني لبدء التخطيط لمناسبتكم.",
  "The Beauty is": "الجمال يكمن",
  "in Every Detail.": "في كل تفصيلة.",
  "Every Detail.": "كل تفصيلة.",
  "Every detail.": "كل تفصيلة.",
  "Not simply An Event.": "ليست مجرد مناسبة.",
  "A Feeling That Stays.": "بل إحساس يدوم.",
  "One vision.": "رؤية واحدة.",
  "Fine Catering": "ضيافة راقية",
  "Birthday Boy": "عيد ميلاد صبي",
  "Birthday Girl": "عيد ميلاد فتاة",
  "Catering": "الضيافة",
  "Celebration": "احتفال",
  "Event Decor": "ديكورات المناسبات",
  "Let's take a look at Our Work": "اكتشفوا أعمالنا",
  "Made With Care.": "صُنعت بعناية.",
  "Remembered Forever.": "لتُذكر إلى الأبد.",
  "Bespoke": "مصممة خصيصًا",
  "cakes.": "كعكات.",
  "Thoughtful": "مدروسة",
  "catering.": "الضيافة.",
  "Decorations.": "ديكورات.",
  "Your Moment": "لحظتكم",
  "Starts Here.": "تبدأ من هنا.",
  "Good Things Begin": "الأشياء الجميلة تبدأ",
  "Conversation.": "بحوار.",
  "REMEMBERING.": "الذاكرة.",
  "Decoration collections": "مجموعات تزيين المناسبات",
  "Cake collections": "مجموعات الكعكات",
  "Catering collections": "مجموعات الضيافة",
  "Emy Maany home": "الصفحة الرئيسية لإيمي معاني",
  "Italian celebration cake": "كعكة احتفالية إيطالية",
  "Animal themed birthday cake": "كعكة عيد ميلاد بطابع الحيوانات",
  "Pink teddy bear birthday cake": "كعكة عيد ميلاد بدب وردي",
  "Crispy chicken sandwich": "شطيرة دجاج مقرمشة",
  "Teddy bear themed event decoration": "تزيين مناسبة بطابع الدب",
  "Emy Maany experience": "خبرة إيمي معاني",
  "in": "في",
  "FIND YOUR WAY TO US": "اعثروا على طريق التواصل معنا",
  "with a Conversation.": "بحوار.",
  "Install Emy Maany app": "تثبيت تطبيق إيمي معاني",
  "Add Emy Maany to your Home Screen": "أضفوا إيمي معاني إلى الشاشة الرئيسية",
  "Install Emy Maany": "تثبيت إيمي معاني",
  "Enjoy a faster, app-like experience.": "استمتعوا بتجربة أسرع تشبه استخدام التطبيقات.",
  "Add to your device for a faster, app-like experience.": "أضيفوا الموقع إلى جهازكم للاستمتاع بتجربة أسرع تشبه التطبيقات.",
  "How to": "طريقة التثبيت",
  "Install": "تثبيت",
  "Not now": "ليس الآن",
  "In Safari, tap Share (the square with the arrow), then choose ‘Add to Home Screen’ and tap Add.": "في متصفح سفاري، اضغطوا على مشاركة (المربع الذي يحمل سهمًا)، ثم اختاروا «إضافة إلى الشاشة الرئيسية»، واضغطوا على إضافة.",
  "Got it": "حسنًا",
  "To install: open Chrome’s ⋮ menu, tap ‘Install app’ (or ‘Add to Home screen’), then confirm Install.": "للتثبيت: افتحوا قائمة كروم ⋮، واضغطوا على «تثبيت التطبيق» (أو «الإضافة إلى الشاشة الرئيسية»)، ثم أكدوا التثبيت.",
  "Emy Maany logo": "شعار إيمي معاني",

  "A glimpse of what we do": "نبذة بسيطة عن خدماتنا",
  "WELCOME TO": "مرحبًا بكم في",
  "A creative destination for beautifully curated celebrations, bespoke cakes, elegant event styling and thoughtful catering.": "وجهة إبداعية للاحتفالات المنسقة بعناية، والكعكات المصممة خصيصًا، وتنسيق المناسبات الراقي، وخدمات الضيافة المميزة.",
  "DISCOVER OUR WORK": "اكتشفوا أعمالنا",
  "A LITTLE ABOUT US": "نبذة عنا",
  "01 / THE STORY": "01 / حكايتنا",
  "Every celebration deserves": "كل احتفال يستحق",
  "its own story.": "حكايته الخاصة.",
  "At Emy Maany, we believe that the most beautiful occasions are built from thoughtful details. Every colour, flavour and finishing touch should feel connected to the people and moments being celebrated.": "في إيمي معاني، نؤمن بأن أجمل المناسبات تُصنع من تفاصيل مدروسة؛ فكل لون ومذاق ولمسة نهائية يجب أن تعكس أصحاب المناسبة واللحظات التي نحتفل بها.",
  "From bespoke cakes and fine catering to event styling and decorations, we bring every element together with care, creativity and a personal touch.": "من الكعكات المصممة خصيصًا والضيافة الراقية إلى تنسيق المناسبات والديكورات، نجمع كل العناصر بعناية وإبداع ولمسة شخصية.",
  "LET'S CREATE SOMETHING BEAUTIFUL": "لنصنع معًا شيئًا جميلًا",
  "Boys Corner": "ركن الأولاد",
  "Girls Corner": "ركن البنات",
  "Adults Corner": "ركن الكبار",
  "Birthday Cakes : Adults": "كعكات اعياد ميلاد الكبار",
  "Valentine & Engagement Cakes": "كعكات عيد الحب و الخطوبة",
  "The Love Collection": "تجميعة الحب",

};
  const textState = new WeakMap();
  const attributeState = new WeakMap();
  let currentLanguage = "en";

  const normalize = value => String(value ?? "").trim().replace(/\s+/g, " ");
  const isArabic = () => currentLanguage === "ar";

  function t(englishText) {
    const source = normalize(englishText);
    return isArabic() ? (translations[source] || source) : source;
  }

  function preserveWhitespace(original, replacement) {
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    return leading + replacement + trailing;
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, noscript, [data-no-translate]")) return;

    const current = node.nodeValue;
    const previous = textState.get(node);
    const currentTrimmed = normalize(current);
    const explicitKey = parent.getAttribute("data-i18n");
    const english = explicitKey || (previous && currentTrimmed === previous.translated
      ? previous.english
      : currentTrimmed);
    if (!english) return;

    const translated = isArabic() ? (translations[english] || english) : english;
    if (currentTrimmed !== translated) {
      node.nodeValue = preserveWhitespace(current, translated);
    }
    textState.set(node, { english, translated });
  }

  function translateAttribute(element, attribute) {
    if (!element.hasAttribute(attribute)) return;
    let states = attributeState.get(element);
    if (!states) {
      states = new Map();
      attributeState.set(element, states);
    }

    const current = element.getAttribute(attribute);
    const previous = states.get(attribute);
    const english = previous && normalize(current) === previous.translated
      ? previous.english
      : normalize(current);
    const translated = isArabic() ? (translations[english] || english) : english;
    if (current !== translated) element.setAttribute(attribute, translated);
    states.set(attribute, { english, translated });
  }

  function translateTree(root = document) {
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType === Node.ELEMENT_NODE) {
      if (root.matches("[data-no-translate]")) return;
      ["aria-label", "title", "alt", "placeholder"].forEach(attribute => translateAttribute(root, attribute));
      if (root.matches('meta[name="description"]')) translateAttribute(root, "content");
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
    if (root.nodeType === Node.ELEMENT_NODE) {
      root.querySelectorAll('[aria-label], [title], [alt], [placeholder], meta[name="description"]').forEach(element => {
        if (!element.closest("[data-no-translate]")) {
          ["aria-label", "title", "alt", "placeholder", "content"].forEach(attribute => {
            if (attribute !== "content" || element.matches('meta[name="description"]')) translateAttribute(element, attribute);
          });
        }
      });
    }
  }

  function updateLanguageControl() {
    document.querySelectorAll(".language-toggle").forEach(button => {
      const target = isArabic() ? "English" : "Arabic";
      const accessibleLabel = isArabic() ? "التبديل إلى اللغة الإنجليزية" : "Switch language to Arabic";
      button.setAttribute("aria-label", accessibleLabel);
      button.setAttribute("title", accessibleLabel);
      button.setAttribute("aria-pressed", String(isArabic()));
      button.dataset.activeLanguage = isArabic() ? "ar" : "en";
    });
  }

  function applyLanguage(language, save = true) {
    currentLanguage = language === "ar" ? "ar" : "en";
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isArabic() ? "rtl" : "ltr";
    document.documentElement.dataset.language = currentLanguage;
    document.body?.classList.toggle("is-arabic", isArabic());

    translateTree(document.documentElement);
    updateLanguageControl();

    if (save) {
      try { localStorage.setItem(STORAGE_KEY, currentLanguage); }
      catch (_) { /* The current page remains usable if storage is unavailable. */ }
    }

    document.dispatchEvent(new CustomEvent("emy-language-change", {
      detail: { language: currentLanguage, direction: isArabic() ? "rtl" : "ltr" }
    }));
  }

  function readSavedLanguage() {
    try { return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en"; }
    catch (_) { return "en"; }
  }

  document.addEventListener("click", event => {
    const button = event.target.closest(".language-toggle");
    if (!button) return;
    event.preventDefault();
    applyLanguage(isArabic() ? "en" : "ar");
  });

  // Newly-created DOM (for example, gallery viewer controls) is translated too.
  const observer = new MutationObserver(records => {
    records.forEach(record => {
      if (record.type === "childList") {
        record.addedNodes.forEach(node => translateTree(node));
      } else if (record.type === "characterData") {
        translateTextNode(record.target);
      } else if (record.type === "attributes") {
        translateAttribute(record.target, record.attributeName);
      }
    });
  });

  // Apply the saved language before page-specific deferred interactions initialize.
  applyLanguage(readSavedLanguage(), false);
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["aria-label", "title", "alt", "placeholder", "content"]
  });

  window.EmyI18n = Object.freeze({
    t,
    get language() { return currentLanguage; },
    get direction() { return isArabic() ? "rtl" : "ltr"; },
    setLanguage: applyLanguage
  });
})();
