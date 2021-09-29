import faker from 'faker';

//generate products
let products = '';

for(let i = 0; i < 3; i++){
  products += `
    <div class="product">
      <img src="${faker.image.image()}" alt="">
      <h3>${faker.commerce.productName()}</h3>
      <p>R${faker.commerce.price()}</p>
    </div>
  `;
}

document.querySelector("#root").innerHTML = products;