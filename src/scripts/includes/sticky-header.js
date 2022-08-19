// Use Guide:
// stickyHeader();
// window.addEventListener('scroll', () => stickyHeader());

const STICKY_START_SCROLL = 40,
      HEADER_SCROLLED_CLASS = 'header_scrolled';

// Sticky header
export const stickyHeader = () => {
  const header = document.querySelector('.header');
  if (
    window.scrollY >= STICKY_START_SCROLL
    && !header.classList.contains(HEADER_SCROLLED_CLASS)
  ) {
    header.classList.add(HEADER_SCROLLED_CLASS);
  } if (
    window.scrollY < STICKY_START_SCROLL
    && header.classList.contains(HEADER_SCROLLED_CLASS)
  ) {
    header.classList.remove(HEADER_SCROLLED_CLASS);
  };
};
