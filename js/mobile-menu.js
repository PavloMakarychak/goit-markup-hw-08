 



(() => {
    const refs = {
      openMenuRef: document.querySelector('.menu-open'),
      closeMenuRef: document.querySelector('.mob-menu-close'),
      menu: document.querySelector('.mob-menu'),
    };
  
    refs.openMenuRef.addEventListener("click", toggleMenu);
    refs.closeMenuRef.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-open');
    }
  })();
