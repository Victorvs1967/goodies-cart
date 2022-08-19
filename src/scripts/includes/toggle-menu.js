MENU_LINK_ACTIVE = 'main-nav__link_active';

// Toggle menu active
export const toggleMenu = item => {
  const logo = document.querySelector('.logo'),
    arrows = document.querySelectorAll('.arrow-link'),
    links = document.querySelectorAll(item);

  logo.addEventListener('click', () => links.forEach(link => link.classList.remove(MENU_LINK_ACTIVE)));

  arrows.forEach(link =>
    link.addEventListener('click', () =>
      links.forEach(link =>
        link.classList.remove(MENU_LINK_ACTIVE))));

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove(MENU_LINK_ACTIVE));
      link.classList.add(MENU_LINK_ACTIVE);
    });
  });
};
