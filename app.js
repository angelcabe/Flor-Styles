const products = [
  { id: 1, name: "Vestido floral", price: 29.99, image: "dress1.jpg" },
  { id: 2, name: "Blusa casual", price: 19.99, image: "blouse1.jpg" },
  { id: 3, name: "Pantalón elegante", price: 39.99, image: "pants1.jpg" },
];

let cart = [];
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");

function renderProducts(filter = "") {
  productList.innerHTML = "";
  products
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(product => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Añadir al carrito</button>
      `;
      productList.appendChild(div);
    });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = `🛒 ${cart.length}`;
}

searchInput.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

renderProducts();
