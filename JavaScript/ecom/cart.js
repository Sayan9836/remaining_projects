function displayCart() {
  const cart = JSON.parse(localStorage.getItem("carts"));
  console.log(cart);
  const CartContainer = document.querySelector(".carts");
  const items = cart?.map((item) => CreateCart(item));
  CartContainer.append(...items);
}

const CreateCart = (product) => {
  const EachProd = document.createElement("div");
  EachProd.innerHTML = `
    <div> 
    <div>
     <h3>${product.title}</h3>
     <p>${product.body}</p>
     <button onClick ="addToCart(${product.id})">Add to Cart</bitton>
     <div>
    <div>
    `;
  return EachProd;
};

window.addEventListener("load", displayCart);
