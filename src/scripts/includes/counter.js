const rows = document.querySelectorAll('.section-cart__table_row');
const totalCount = document.querySelector('.section-cart__table_footer-count');
const totalPrice = document.querySelector('.section-cart__table_footer-total');

export const setCounter = () => {
  rows.forEach(row => {
    row.querySelectorAll('button').forEach(btn => {
      const count = row.querySelector('.section-cart__table_count span');
      const price = row.querySelector('.section-cart__table_price');
      const priceGoodie = +price.textContent / +count.textContent;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('close-control')) {
          totalCount.textContent = +totalCount.textContent - +count.textContent;
          totalPrice.textContent = +totalPrice.textContent - +price.textContent;
          row.style.display = 'none';
        } else if (btn.classList.contains('section-cart__table_controls-up')) {
          count.textContent = +count.textContent + 1;
          price.textContent = +price.textContent + priceGoodie;
          totalCount.textContent = +totalCount.textContent + 1;
          totalPrice.textContent = +totalPrice.textContent + priceGoodie;
        } else if (btn.classList.contains('section-cart__table_controls-down') && +count.textContent > 1) {
          count.textContent = +count.textContent - 1;
          price.textContent = +price.textContent <= priceGoodie ? priceGoodie : +price.textContent - priceGoodie;
          totalCount.textContent = +totalCount.textContent - 1;
          totalPrice.textContent = +totalPrice.textContent - priceGoodie;
        }
      });
    });
  });
};
