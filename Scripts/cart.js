// Utility Functions for Cart
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartSummary();
}

function clearCart() {
  localStorage.removeItem("cart");
  renderCartItems();
  updateCartCount();
}

// Update Cart Summary
function updateCartSummary() {
  const cart = getCart();
  const totalItems = document.getElementById("total-items");
  const totalPrice = document.getElementById("total-price");

  let totalQuantity = 0;
  let totalCost = 0;

  cart.forEach(item => {
    totalQuantity += item.quantity;
    totalCost += item.price * item.quantity;
  });

  totalItems.textContent = totalQuantity;
  totalPrice.textContent = totalCost.toFixed(2);
}

// Add Item to Cart
function addToCart(productId, productName, productPrice, productImage) {
  const cart = getCart();
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();
  alert(`${productName} added to cart!`);
}

// Remove Item from Cart
function removeFromCart(productId) {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  saveCart(updatedCart);
  renderCartItems();
}

// Update Cart Count in Navbar
function updateCartCount() {
  const cart = getCart();
  document.getElementById("cart-count").textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Utility Functions for Wishlist
function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(wishlist) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

function updateWishlistCount() {
  const wishlist = getWishlist();
  document.getElementById("wishlist-count").textContent = wishlist.length;
}

// Add Item to Wishlist
function addToWishlist(productId, productName, productPrice, productImage) {
  const wishlist = getWishlist();
  if (wishlist.find(item => item.id === productId)) {
    alert(`${productName} is already in your wishlist!`);
    return;
  }

  wishlist.push({
    id: productId,
    name: productName,
    price: productPrice,
    image: productImage
  });

  saveWishlist(wishlist);
  alert(`${productName} added to wishlist!`);
}

// Remove Item from Wishlist
function removeFromWishlist(productId) {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist(updatedWishlist);
  renderWishlistItems();
}

// Render Cart Items
function renderCartItems() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cart-items");
  const totalItems = document.getElementById("total-items");
  const totalPrice = document.getElementById("total-price");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `;
  });

  totalItems.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  totalPrice.textContent = total.toFixed(2);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  }
}

// Render Wishlist Items
function renderWishlistItems() {
  const wishlist = getWishlist();
  const wishlistItemsContainer = document.getElementById("wishlist-items");

  wishlistItemsContainer.innerHTML = "";

  wishlist.forEach(item => {
    wishlistItemsContainer.innerHTML += `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)}</p>
          <button onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.image}')">Add to Cart</button>
          <button onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
      </div>
    `;
  });

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = "<p>Your wishlist is empty.</p>";
  }
}

// Render Products on the Products Page
function renderProducts() {
  const productGrid = document.getElementById("product-grid");
  const products = [
    {
      id: 1,
      name: "Glow Serum",
      price: 29.99,
      image: "https://www.thenaturalwash.com/cdn/shop/products/Product_ingredients_18.jpg?v=1655283891&width=493"
    },
    {
      id: 2,
      name: "Hydrating Moisturizer",
      price: 39.99,
      image: "https://www.simpleskincare.in/cdn/shop/files/hlm.png?v=1721646477"
    },
    {
      id: 3,
      name: "SPF 50 Sunscreen",
      price: 19.99,
      image: "https://m.media-amazon.com/images/I/515qmIG0GoL._SY450_.jpg"
    }
  ];

  productGrid.innerHTML = "";

  products.forEach(product => {
    productGrid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        <button onclick="addToWishlist(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Wishlist</button>
      </div>
    `;
  });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateWishlistCount();

  if (document.getElementById("product-grid")) {
    renderProducts();
  }

  if (document.getElementById("cart-items")) {
    renderCartItems();
  }

  if (document.getElementById("wishlist-items")) {
    renderWishlistItems();
  }
});
