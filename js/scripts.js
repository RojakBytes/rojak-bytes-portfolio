/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
// Bootstrap navigation and modal behaviours are retained from Agency.
window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('#mainNav');
    const collapseElement = document.querySelector('#navbarResponsive');
    const toggler = document.querySelector('.navbar-toggler');
    const shrink = () => nav?.classList.toggle('navbar-shrink', window.scrollY > 12);
    shrink();
    window.addEventListener('scroll', shrink, { passive: true });
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.bootstrap && collapseElement && toggler && getComputedStyle(toggler).display !== 'none') {
                bootstrap.Collapse.getOrCreateInstance(collapseElement, { toggle: false }).hide();
            }
        });
    });
    if (window.bootstrap && collapseElement && toggler) {
        collapseElement.addEventListener('shown.bs.collapse', () => toggler.setAttribute('aria-label', 'Close navigation'));
        collapseElement.addEventListener('hidden.bs.collapse', () => toggler.setAttribute('aria-label', 'Open navigation'));
    }
    const cards = [...document.querySelectorAll('.project-card')];
    const filters = [...document.querySelectorAll('[data-filter]')];
    const status = document.querySelector('#filter-status');
    filters.forEach(button => button.addEventListener('click', () => {
        const selected = button.dataset.filter;
        filters.forEach(filter => {
            const active = filter === button;
            filter.classList.toggle('is-active', active);
            filter.setAttribute('aria-pressed', String(active));
        });
        let visible = 0;
        cards.forEach(card => {
            const show = selected === 'all' || card.dataset.category === selected;
            card.hidden = !show;
            if (show) visible++;
        });
        if (status) status.textContent = `Showing ${visible} ${visible === 1 ? 'project' : 'projects'}: ${button.textContent.trim()}.`;
    }));
});
