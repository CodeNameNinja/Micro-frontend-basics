import faker from 'faker'

const cartText = `<div>You have ${faker.random.number()}</div>`

document.getElementById('cart').innerHTML = cartText