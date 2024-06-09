document.addEventListener('DOMContentLoaded', () => {
    const navigationSection = document.querySelector('.navigation-section');
    const footerNavigationList = document.querySelector('.footer-navigation-list');

    navigationSection.addEventListener('mouseover', () => {
        footerNavigationList.classList.remove('hidden');
    });

    navigationSection.addEventListener('mouseout', () => {
        footerNavigationList.classList.add('hidden');
    });
});
