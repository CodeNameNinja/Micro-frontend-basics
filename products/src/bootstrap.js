import faker from 'faker';

const mount = (el) => {
  //generate products
  let products = '';

  for (let i = 0; i < 3; i++) {
    products += `
    <div class="product">
      <img src="${faker.image.image()}" alt="">
      <h3>${faker.commerce.productName()}</h3>
      <p>R${faker.commerce.price()}</p>
    </div>
  `;
  }

  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // Assuming our container doesn't have an element with an id of 'dev-products'
  if (el) {
    // We are running in isolation
    mount(el);
  }
}

export { mount };