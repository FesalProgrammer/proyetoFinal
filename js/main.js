let cart = [];
let precio = 0;

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const button = card.querySelector('button');
  const productTitle = card.querySelector('h3').textContent;
  const productPrice = card.querySelector('p').textContent.slice(1);

  button.addEventListener('click', () => {
    const product = {
      title: productTitle,
      precio: productPrice,
      cantidad: 1

    };
    
    cart.push(product);
    precio += parseFloat(productPrice);

    localStorage.setItem('productos', JSON.stringify(cart));
    localStorage.setItem('total', precio);

    document.getElementsByClassName('count')[0].innerText = cart.length;

    console.log('producto cargado: ', cart);
  });

})

function handleCart(){
  const cart = JSON.parse(localStorage.getItem('productos')) || [];
  const total = localStorage.getItem('total') || 0;
};