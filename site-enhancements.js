/* Emy Maany bilingual experience — persistent EN/AR, DOM-safe and dynamic-content aware */
(() => {
  'use strict';
  const KEY = 'emy-maany-language';
  const translations = {
    'Home':'الرئيسية','Our Work':'أعمالنا','Connect':'تواصل معنا','Plan Your Event':'خططي مناسبتك','Plan your event':'خططي مناسبتك',
    'THE ART OF CELEBRATION':'فن الاحتفال','Moments made':'لحظات تُصنع','Magnificent.':'استثنائية.','From The First Beautiful Detail To The Final Sweet Bite, We Bring Every Part Of Your Celebration Together.':'من أول تفصيلة جميلة وحتى آخر قطعة حلوى، نجمع كل عناصر مناسبتك في تجربة متكاملة.',
    'Discover Our World':'اكتشفي عالمنا','SCROLL TO EXPLORE':'مرري لاكتشاف المزيد','A COMPLETE CELEBRATION HOUSE':'كل ما يجعل مناسبتك متكاملة',
    'The Beauty is':'يكمن الجمال','in ':'في ','Every Detail.':'كل تفصيلة.','At Emy Maany, we believe the most Memorable Occasions are the ones where everything Feels Effortlessly Considered.':'نؤمن في إيمي معاني أن أجمل المناسبات وأكثرها بقاءً في الذاكرة هي تلك التي تبدو فيها كل التفاصيل متناغمة وبكل بساطة.',
    'We bring Event Styling, Bespoke Cakes and Thoughtful Catering under one Creative Roof — shaping a Seamless Experience that Feels Personal, polished and Entirely Yours.':'نجمع تنسيق المناسبات وتصميم التورت والضيافة المدروسة تحت سقف إبداعي واحد، لنصنع تجربة متكاملة تحمل طابعك الخاص وتفاصيلها متقنة.',
    'Contact':'تواصلي معنا','Years of Cake & Sweets Experience':'سنوات الخبرة في التورت والحلويات','Years of Event Decorations Experience':'سنوات الخبرة في ديكورات المناسبات','Happy Customers':'عميل سعيد',
    'WHAT WE DO':'ماذا نقدم','One vision. ':'رؤية واحدة. ','Every detail.':'كل تفصيلة.','All the Elements of an Extraordinary Event, Thoughtfully Brought Together.':'كل عناصر المناسبة الاستثنائية، نجمعها بعناية وانسجام.',
    '01 / THE SETTING':'01 / أجواء المكان','Event décor':'ديكورات المناسبات','Atmosphere, Styling and Beautiful spaces that set the scene.':'أجواء وتنسيقات ومساحات جميلة تصنع المشهد الذي تحلمين به.',
    '02 / THE CENTREPIECE':'02 / القطعة المحورية','Bespoke cakes':'تورت مصممة خصيصًا','Distinctive creations made to be Admired, Shared and Remembered.':'تصميمات مميزة تستحق الإعجاب والمشاركة وتبقى في الذاكرة.',
    '03 / THE TABLE':'03 / مائدة الضيافة','Fine catering':'ضيافة راقية','Delicious Details and Inviting Tables For Every Kind Of Gathering.':'تفاصيل شهية وموائد ترحيبية تناسب كل تجمع ومناسبة.',
    'THE EMY MAANY PROMISE':'وعد إيمي معاني','Not simply An Event.':'ليست مجرد مناسبة.','A Feeling That Stays.':'بل إحساس يدوم.','Let\'s take a look at Our Work':'اكتشفي أعمالنا','Thoughtfully Made. Beautifully Remembered.':'صُنعت بعناية، لتبقى في الذاكرة.','Thoughtfully made. Beautifully remembered.':'صُنعت بعناية، لتبقى في الذاكرة.','CREATED BY Bemen_GS':'تصميم وتطوير Bemen_GS',
    'THE PORTFOLIO':'معرض الأعمال','Made With Care.':'صُنعت بكل عناية.','Remembered Forever.':'لتبقى في الذاكرة.','Three Beautiful Ingredients. One Seamless Celebration.':'ثلاثة عناصر جميلة، لاحتفال متكامل.','A CURATED COLLECTION / EMY MAANY':'مختارات من أعمال إيمي معاني',
    '01 — THE SETTING':'01 — أجواء المكان','Event ':'ديكورات ','Decorations.':'المناسبات.','We Transform Spaces into Atmospheres — from Intimate Tablescapes to Statement Installations. Every Colour, Texture and Finishing Touch has a Purpose.':'نحوّل المساحات إلى أجواء استثنائية؛ من تنسيقات الموائد الحميمة إلى الديكورات اللافتة. لكل لون وملمس ولمسة نهائية غاية.',
    '02 — THE CENTREPIECE':'02 — القطعة المحورية','Bespoke ':'تورت ','cakes.':'مصممة خصيصًا.','Designed around your occasion and finished with an eye for detail. Our cakes bring together beautiful presentation and a delicious centre.':'نصمم التورت لتناسب مناسبتك، ونعتني بكل تفصيلة لتجمع بين جمال التقديم وروعة المذاق.',
    '03 — THE TABLE':'03 — مائدة الضيافة','Thoughtful ':'ضيافة ','catering.':'مدروسة.','From graceful grazing tables to a beautifully presented menu, we make the food part of the occasion — generous, considered and full of flavour.':'من موائد الضيافة المتنوعة إلى قوائم الطعام المقدمة بأناقة، نجعل الطعام جزءًا لا يُنسى من مناسبتك.',
    'THE COLLECTION':'المجموعة','Project Title':'عنوان المشروع','Close collection':'إغلاق المجموعة','Previous image':'الصورة السابقة','Next image':'الصورة التالية','Choose an image':'اختاري صورة','YOUR OCCASION, YOUR STORY':'مناسبتك، حكايتك','Shall We Make it ':'هل نجعلها ','Unforgettable?':'لا تُنسى؟','Start A Conversation':'ابدئي محادثة',
    'LET\'S BEGIN SOMETHING BEAUTIFUL':'لنبدأ شيئًا جميلًا','Your Moment':'لحظتك','Starts Here.':'تبدأ من هنا.','Tell us a little about the Celebration you\'re Imagining. We\'d love to hear from you.':'أخبرينا قليلًا عن المناسبة التي تتخيلينها. يسعدنا أن نسمع منك.',
    'FIND YOUR WAY TO US':'تواصلي معنا','THE FIRST HELLO':'بداية الحكاية','Good Things Begin':'الأشياء الجميلة تبدأ','with a ':'بـ','Conversation.':'محادثة.','For Event Enquiries, Collaborations .':'لاستفسارات المناسبات والتعاون.',
    'FOLLOW ALONG':'تابعينا','Visit our page ↗':'زوري صفحتنا ↗','A LITTLE VISUAL INSPIRATION':'لمحات من إلهامنا البصري','Explore our feed ↗':'شاهدي صورنا ↗','LET\'S TALK DETAILS':'لنتحدث عن التفاصيل','Start a chat ↗':'ابدئي محادثة ↗','A NOTE FROM EMY MAANY':'كلمة من إيمي معاني',
    'Every Celebration Begins With An Idea. Share Yours With Us, And Let\'s Turn It Into Something Worth ':'كل مناسبة تبدأ بفكرة. شاركينا فكرتك، ودعينا نحولها إلى ذكرى تستحق ','REMEMBERING.':'أن تبقى في الذاكرة.',
    'THE SETTING':'أجواء المكان','THE CENTREPIECE':'القطعة المحورية','THE TABLE':'مائدة الضيافة','PHOTOGRAPHS':'صورة','Explore':'اكتشفي','Show image':'اعرضي الصورة'
  };
  const groupTranslations = {
    'Wedding Receptions':'استقبالات الزفاف','THE ART OF THE SETTING':'فن تنسيق المكان','Elegant reception styling, tablescapes and unforgettable celebration spaces.':'تنسيقات استقبال أنيقة وموائد راقية ومساحات احتفال لا تُنسى.',
    'The reception table':'مائدة الاستقبال','A romantic celebration':'احتفال رومانسي','An intimate setting':'أجواء حميمة','Floral table details':'تفاصيل زهرية للمائدة',
    'Floral & Finishing Touches':'الزهور واللمسات النهائية','FLOWERS & DETAILS':'الزهور والتفاصيل','The flowers, textures and thoughtful finishing touches that bring a room together.':'زهور وخامات ولمسات مدروسة تجمع تفاصيل المكان في لوحة متكاملة.',
    'Floral styling':'تنسيق الزهور','Soft floral palette':'ألوان زهرية هادئة','A beautiful detail':'تفصيلة جميلة',
    'Celebration Installations':'ديكورات المناسبات','STATEMENT MOMENTS':'تفاصيل تخطف الأنظار','Beautiful focal points and bespoke styling for life\'s most special occasions.':'عناصر محورية جميلة وتنسيقات خاصة لأهم مناسبات الحياة.','The celebration space':'مساحة الاحتفال','Wedding atmosphere':'أجواء الزفاف','A statement setting':'تنسيق مميز',
    'Wedding Cakes':'تورت الزفاف','MADE FOR YOUR MOMENT':'صُممت للحظتك','Elegant centrepieces created to complement the style of your celebration.':'قطع محورية أنيقة تكمل أسلوب وديكور مناسبتك.','Classic celebration cake':'تورتة احتفال كلاسيكية','An elegant cake design':'تصميم تورتة أنيق','Wedding cake details':'تفاصيل تورت الزفاف',
    'Birthday Cakes':'تورت أعياد الميلاد','A SWEET STATEMENT':'لمسة حلوة مميزة','Personalised cakes made to turn a birthday into a moment worth remembering.':'تورت مصممة خصيصًا لتحول عيد الميلاد إلى ذكرى جميلة.','A birthday centrepiece':'تورتة عيد الميلاد','A celebration cake':'تورتة للاحتفال','Sweet finishing details':'لمسات نهائية حلوة',
    'Dessert Tables':'طاولات الحلويات','A TABLE OF DELIGHT':'مائدة من البهجة','Thoughtfully arranged desserts that delight guests and complete the celebration.':'حلويات مرتبة بعناية تسعد الضيوف وتكمل أجواء الاحتفال.','A dessert display':'عرض الحلويات','Sweet selections':'تشكيلة حلويات','Dessert table details':'تفاصيل طاولة الحلويات',
    'Private Dining':'ضيافة المناسبات الخاصة','A THOUGHTFUL TABLE':'مائدة بكل عناية','Beautifully prepared menus and welcoming tables for intimate gatherings.':'قوائم طعام معدة بعناية وموائد ترحيبية للتجمعات الخاصة.','An inviting table':'مائدة ترحيبية','A beautifully served dish':'طبق مقدم بأناقة','The dining experience':'تجربة تناول الطعام',
    'Buffet & Grazing':'البوفيه وموائد الضيافة','ABUNDANCE, BEAUTIFULLY SERVED':'وفرة مقدمة بأناقة','Generous spreads and inviting displays made for sharing and gathering.':'تشكيلات متنوعة وعروض شهية صُممت للمشاركة والاجتماع.','A colourful spread':'تشكيلة غنية بالألوان','Freshly prepared dishes':'أطباق طازجة التحضير','A table made for sharing':'مائدة للمشاركة',
    'Canapés & Small Bites':'مقبلات ولقيمات صغيرة','THE LITTLE DETAILS':'التفاصيل الصغيرة','Beautifully prepared small bites that make every part of the occasion feel special.':'لقيمات صغيرة معدة بأناقة تجعل كل لحظة في مناسبتك مميزة.','Canapés for your guests':'مقبلات لضيوفك','Fresh small plates':'أطباق صغيرة طازجة','A carefully prepared bite':'لقمة أُعدت بعناية',
    'Fine Dining':'ضيافة راقية','THE GATHERING TABLE':'مائدة اللقاء','THE SWEET COLLECTION':'تشكيلة من الحلويات','A considered selection of desserts, styled beautifully for your guests.':'تشكيلة مختارة من الحلويات، منسقة بأناقة لضيوفك.','A delicate dessert':'حلوى رقيقة','A fine dining table':'مائدة ضيافة راقية','Beautiful sweet treats':'حلويات شهية وجميلة','Dessert table selection':'تشكيلة طاولة الحلويات','Thoughtfully presented dishes and a refined dining experience for your guests.':'أطباق مقدمة بعناية وتجربة ضيافة راقية لضيوفك.','EVENT DECORATIONS':'ديكورات المناسبات','BESPOKE CAKES':'تورت مصممة خصيصًا','EVENT CATERING':'ضيافة المناسبات','PHOTOGRAPHS':'صور','Show image':'اعرضي الصورة'
  };
  const all = {...translations, ...groupTranslations};
  let lang = localStorage.getItem(KEY) === 'ar' ? 'ar' : 'en';
  const originals = new WeakMap();
  const skip = new Set(['SCRIPT','STYLE','NOSCRIPT']);
  const norm = s => s.replace(/\s+/g, ' ').trim();

  function translateTextNode(node) {
    const parent = node.parentElement;
    if (!parent || skip.has(parent.tagName) || parent.closest('[data-no-translate],script,style')) return;
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const original = originals.get(node);
    const key = norm(original);
    if (lang === 'ar' && all[key]) {
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = leading + all[key] + trailing;
    } else if (lang === 'en') node.nodeValue = original;
  }
  function translateAttributes(root) {
    const attrs = ['aria-label','title','alt'];
    const nodes = [root, ...(root.querySelectorAll ? root.querySelectorAll('*') : [])].filter(Boolean);
    nodes.forEach(el => attrs.forEach(attr => {
      if (!el.hasAttribute?.(attr)) return;
      const marker = `data-original-${attr}`;
      if (!el.hasAttribute(marker)) el.setAttribute(marker, el.getAttribute(attr));
      const original = el.getAttribute(marker);
      if (lang === 'ar' && all[norm(original)]) el.setAttribute(attr, all[norm(original)]);
      else if (lang === 'en') el.setAttribute(attr, original);
    }));
  }
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-arabic', lang === 'ar');
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node; while ((node = walker.nextNode())) translateTextNode(node);
    translateAttributes(document.body);
    const button = document.querySelector('.language-toggle');
    if (button) { button.textContent = lang === 'ar' ? 'English' : 'عربي'; button.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'); }
    const title = document.querySelector('title');
    if (title) title.textContent = lang === 'ar' ? ({'Emy Maany | Celebrations, Curated':'إيمي معاني | مناسبات بتفاصيل استثنائية','Our Work | Emy Maany':'أعمالنا | إيمي معاني','Connect | Emy Maany':'تواصل معنا | إيمي معاني'}[title.dataset.originalTitle || title.textContent] || title.textContent) : (title.dataset.originalTitle || title.textContent);
    localStorage.setItem(KEY, lang);
    window.dispatchEvent(new CustomEvent('emy:languagechange', {detail:{language:lang}}));
  }
  const header = document.querySelector('.site-header');
  if (header) {
    const button = document.createElement('button');
    button.className = 'language-toggle'; button.type = 'button'; button.textContent = lang === 'ar' ? 'English' : 'عربي';
    button.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    const nav = header.querySelector('.main-nav'); header.insertBefore(button, nav || null);
    button.addEventListener('click', () => { lang = lang === 'en' ? 'ar' : 'en'; applyLanguage(); });
  }
  const title = document.querySelector('title'); if (title) title.dataset.originalTitle = title.textContent;
  applyLanguage();
  // Observe cards/viewer content created later by work.js so it follows the selected language.
  const observer = new MutationObserver(records => {
    records.forEach(record => {
      record.addedNodes.forEach(added => {
        if (added.nodeType === Node.TEXT_NODE) translateTextNode(added);
        else if (added.nodeType === Node.ELEMENT_NODE) {
          const walker = document.createTreeWalker(added, NodeFilter.SHOW_TEXT); let n;
          while ((n = walker.nextNode())) translateTextNode(n);
          translateAttributes(added);
        }
      });
    });
  });
  observer.observe(document.body, {childList:true,subtree:true});

  // Reading progress and back-to-top controls
  const progress = document.createElement('div'); progress.className='reading-progress'; progress.innerHTML='<span></span>'; document.body.appendChild(progress);
  const top = document.createElement('button'); top.className='back-to-top'; top.type='button'; top.textContent='↑'; top.setAttribute('aria-label','Back to top'); document.body.appendChild(top);
  top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.firstElementChild.style.width=`${max>0?Math.min(100,Math.max(0,scrollY/max*100)):0}%`;top.classList.toggle('is-visible',scrollY>350);};
  addEventListener('scroll',update,{passive:true}); addEventListener('resize',update); update();
  // Animated experience counters
  const counters=document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) { const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count),dec=Number(el.dataset.decimals||0),suffix=el.dataset.suffix||'',start=performance.now();const tick=now=>{const p=Math.min(1,(now-start)/1500),ease=1-Math.pow(1-p,3);el.textContent=(target*ease).toFixed(dec)+suffix;if(p<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);io.unobserve(el);}),{threshold:.45}); counters.forEach(el=>io.observe(el)); }
})();
