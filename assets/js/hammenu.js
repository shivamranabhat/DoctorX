document.addEventListener('DOMContentLoaded', () => {
    const hamBtn = document.getElementById('ham-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    hamBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('opacity-0', 'invisible');
        mobileMenu.classList.add('opacity-100', 'visible');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('opacity-100', 'visible');
        mobileMenu.classList.add('opacity-0', 'invisible');
    });

});