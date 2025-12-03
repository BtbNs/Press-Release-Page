console.log("News release page loaded!");

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.site-footer p:first-child');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', new Date().getFullYear());
    }
});