(() => {
    const slides = [...document.querySelectorAll('.showcase-slide')];
    const tabs = [...document.querySelectorAll('.showcase-tabs button')];
    const current = document.getElementById('showcase-current');
    const prev = document.getElementById('showcase-prev');
    const next = document.getElementById('showcase-next');
    if (!slides.length) return;
    let active = 0, busy = false, timer, touchedAt = 0;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function go(index, user = true) {
        if (busy) return;
        const target = (index + slides.length) % slides.length;
        if (target === active) return;
        busy = true;
        if (user) touchedAt = Date.now();
        slides[active].classList.remove('is-active');
        slides[target].classList.add('is-active');
        tabs[active].classList.remove('active');
        tabs[target].classList.add('active');
        tabs.forEach((tab, i) => tab.setAttribute('aria-current', i === target ? 'true' : 'false'));
        active = target;
        current.textContent = String(active + 1).padStart(2, '0');
        window.setTimeout(() => {
            busy = false;
        }
        , reduced ? 0 : 680);
    }
    prev?.addEventListener('click', () => go(active - 1));
    next?.addEventListener('click', () => go(active + 1));
    tabs.forEach((tab, i) => tab.addEventListener('click', () => go(i)));
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') go(active - 1);
        if (e.key === 'ArrowRight') go(active + 1);
    }
    );
    let sx = 0, sy = 0;
    const stage = document.querySelector('.showcase-stage');
    stage?.addEventListener('touchstart', e => {
        sx=e.touches[0].clientX; sy=e.touches[0].clientY;
    }
    , {
        passive:true
    }
    );
    stage?.addEventListener('touchend', e => {
        const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy; if(Math.abs(dx)>48 && Math.abs(dx)>Math.abs(dy)) go(active+(dx<0?1:-1));
    }
    , {
        passive:true
    }
    );
    timer = window.setInterval(() => {
        if (document.visibilityState === 'visible' && Date.now()-touchedAt>6000) go(active+1, false);
    }
    , 5200);
    tabs[0]?.setAttribute('aria-current','true');
}
)();
