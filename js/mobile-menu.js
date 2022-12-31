  
(() => {
  const mobileMenuRef = document.querySelector('[data-menu-button]');
  const openMenuRef = document.querySelector('[data-menu-open]');
   const closeMenuRef = document.querySelector('[data-menu-close]');
  // const closeMenuBtn = document.querySelector('.js-close-menu');
    mobileMenuRef.addEventListener('click', () => {
const expanded =
        mobileMenuRef.getAttribute('aria-expanded') === 'true' || false;
       mobileMenuRef.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open');
      openMenuRef.classList.toggle('is-open');
      closeMenuRef.classList.toggle('is-open');
  }); 
})();


