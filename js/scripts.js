document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("featured-products")) {
    loadFeaturedProducts();
  }
  if (document.getElementById("product-list")) {
    loadProductList();
  }
  if (document.getElementById("product-detail")) {
    loadProductDetail();
  }
  if (document.getElementById("cart-items")) {
    loadCartItems();
  }
});

function loadFeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ];
  const container = document.getElementById("featured-products");
  featuredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <a href="product.html?id=${product.id}">View Details</a>
        `;
    container.appendChild(productDiv);
  });
}

function loadProductList() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ];
  const container = document.getElementById("product-list");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <a href="product.html?id=${product.id}">View Details</a>
        `;
    container.appendChild(productDiv);
  });
}

function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = {
    id: productId,
    name: `Product ${productId}`,
    price: productId * 100,
    description: `Description of Product ${productId}`,
    image: "https://via.placeholder.com/150",
  };
  const container = document.getElementById("product-detail");
  container.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
}

function loadCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  cartItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
    container.appendChild(itemDiv);
  });
}

function addToCart(productId) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const product = {
    id: productId,
    name: `Product ${productId}`,
    price: productId * 100,
    quantity: 1,
  };
  const existingItem = cartItems.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert("Product added to cart");
}

function removeFromCart(productId) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems = cartItems.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  loadCartItems();
}
