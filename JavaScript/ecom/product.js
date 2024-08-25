
let Products = [];
const fetchProducts = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const result = await fetch(URL);
    Products = await result.json();
    console.log(Products);

    displayProducts();
}

const displayProducts = () => {
    const ProductContainer = document.querySelector('.products');
    const items = Products?.map((prod) => CreateProduct(prod))
    ProductContainer.append(...items)
}

const openCartPage = () => {
    window.location.href = 'cart.html'
}

window.CreateProduct = function(product) {
    const card = document.createElement('div');
    card.classList.add('product_card');
    card.innerHTML = `
     <div> 
     <div>
      <h3>${product.title}</h3>
      <p>${product.body}</p>
      <button onClick ="addToCart(${product.id})">Add to Cart</bitton>
      <div>
     <div>
      `
    return card;
}

let cart = []

const addToCart = (ProdId) => {
    const product = Products.find((prod) => prod.id === ProdId);
    cart.push(product);
    localStorage.setItem('carts',JSON.stringify(cart));
}



window.addEventListener('load', fetchProducts);

