const rows = document.querySelectorAll('.section-cart__table_row');
const totalCount = document.querySelector('.section-cart__table_footer-count');
const totalPrice = document.querySelector('.section-cart__table_footer-total');

export const setCounter = () => {
  rows.forEach(row => {
    row.querySelectorAll('button').forEach(btn => {
      const count = row.querySelector('.section-cart__table_row-count__input');
      const price = row.querySelector('.section-cart__table_row-price');
      const priceGoodie = +price.textContent / +count.value;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('close-control')) {
          totalCount.textContent = +totalCount.textContent - +count.value;
          totalPrice.textContent = +totalPrice.textContent - +price.textContent;
          row.style.display = 'none';
        } else if (btn.classList.contains('section-cart__table_row-controls-up')) {
          count.value = +count.value + 1;
          price.textContent = +price.textContent + priceGoodie;
          totalCount.textContent = +totalCount.textContent + 1;
          totalPrice.textContent = +totalPrice.textContent + priceGoodie;
        } else if (btn.classList.contains('section-cart__table_row-controls-down') && +count.value > 1) {
          count.value = +count.value - 1;
          price.textContent = +price.textContent <= priceGoodie ? priceGoodie : +price.textContent - priceGoodie;
          totalCount.textContent = +totalCount.textContent - 1;
          totalPrice.textContent = +totalPrice.textContent - priceGoodie;
        }
      });
    });
  });
};
