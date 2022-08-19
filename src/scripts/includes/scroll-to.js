const SCROLL_STEP = 0.1;

// Scroll to
export const scrollTo = () => {
  const scrollDownButton = document.getElementById('scroll-down'),
    scrollToContent = document.getElementById('content');

  let currenttScroll = window.scrollY;
  let scrollAnimationId;

  const startAnimationScroll = newScrollY => {
    const deltaScroll = newScrollY - currenttScroll;
    currenttScroll += deltaScroll * SCROLL_STEP;
    window.scrollTo(0, currenttScroll);

    if (Math.abs(deltaScroll) > 1) {
      scrollAnimationId = window.requestAnimationFrame(() => startAnimationScroll(newScrollY));
    } else {
      window.scrollTo(0, newScrollY);
      stopAnimationScroll();
    }
  };

  const stopAnimationScroll = () => {
    window.cancelAnimationFrame(scrollAnimationId);
    scrollAnimationId = undefined;
  };

  scrollDownButton.addEventListener('click', () => {
    stopAnimationScroll();

    currenttScroll = window.scrollY;
    startAnimationScroll(scrollToContent.offsetTop);
  });
};