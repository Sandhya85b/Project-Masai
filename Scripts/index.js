// Search functionality
function handleSearch() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
  );
  displayProductsInSection("searchResults", filteredProducts);
}

// Initialize search bar
document.getElementById("searchBar").addEventListener("input", handleSearch);

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayProductsInSection("productList", products);
  displayBestsellers();
  attachEventListeners();
});

//section1, section2 and section3
window.onload = function () {
  const products = [
    {
      imageUrl: "https://m.media-amazon.com/images/I/51mnXF0Xl7L._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: "Glow Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61a8wcx-unL._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: 'serum',
      price: "Rs.200",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
      name: "CeraVe",
      price: "Rs.343",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51wERqBeGLL._SY450_.jpg",
      name: "Vitamic C Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/315iEtHWE3L._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Cetaphil Moisturising",
      price: "Rs.500",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/319y+2isg+L._SY300_SX300_PQ37_.jpg",
      name: "Nivea",
      price: "Rs.900",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51mnXF0Xl7L._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: "Glow Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61a8wcx-unL._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: 'serum',
      price: "Rs.200",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
      name: "CeraVe",
      price: "Rs.343",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51wERqBeGLL._SY450_.jpg",
      name: "Vitamic C Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/315iEtHWE3L._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Cetaphil Moisturising",
      price: "Rs.500",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/319y+2isg+L._SY300_SX300_PQ37_.jpg",
      name: "Nivea",
      price: "Rs.900",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51mnXF0Xl7L._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: "Glow Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61a8wcx-unL._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: 'serum',
      price: "Rs.200",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
      name: "CeraVe",
      price: "Rs.343",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51wERqBeGLL._SY450_.jpg",
      name: "Vitamic C Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/315iEtHWE3L._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Cetaphil Moisturising",
      price: "Rs.500",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/319y+2isg+L._SY300_SX300_PQ37_.jpg",
      name: "Nivea",
      price: "Rs.900",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51mnXF0Xl7L._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: "Glow Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61a8wcx-unL._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: 'serum',
      price: "Rs.200",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
      name: "CeraVe",
      price: "Rs.343",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51wERqBeGLL._SY450_.jpg",
      name: "Vitamic C Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/315iEtHWE3L._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Cetaphil Moisturising",
      price: "Rs.500",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/319y+2isg+L._SY300_SX300_PQ37_.jpg",
      name: "Nivea",
      price: "Rs.900",
      description: "This is for long lasting hydration"
    }, {
      imageUrl: "https://m.media-amazon.com/images/I/51mnXF0Xl7L._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: "Glow Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61a8wcx-unL._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
      name: 'serum',
      price: "Rs.200",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
      name: "CeraVe",
      price: "Rs.343",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51wERqBeGLL._SY450_.jpg",
      name: "Vitamic C Serum",
      price: "Rs.380",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/315iEtHWE3L._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Cetaphil Moisturising",
      price: "Rs.500",
      description: "This is for long lasting hydration"
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/319y+2isg+L._SY300_SX300_PQ37_.jpg",
      name: "Nivea",
      price: "Rs.900",
      description: "This is for long lasting hydration"
    }
  ];
  const productList = document.getElementById("productList");

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
   productDiv.style.padding="1%";
    productDiv.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
    
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.imageUrl}" alt="${product.name}" style="width: 150px; height: 150px;">
        <p>${product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      `;

    productList.appendChild(productDiv);
  });
};

// Add to Cart
window.addToCart = function (productId) {
  const product = products.find((item) => item.id === productId);
  //!cart.some(...): The condition checks if there is no item in the cart array with an id equal to productId.
  if (product && !cart.some((item) => item.id === productId)) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    updateCartDisplay();
  } else {
    alert("This item is already in your cart!");
  }
};

// Add to Wishlist
window.addToWishlist = function (productId) {
  const product = products.find((item) => item.id === productId);
  if (product && !wishlist.some((item) => item.id === productId)) {
    wishlist.push(product);
    alert(`${product.name} has been added to your wishlist!`);
    updateWishlistDisplay();
  } else {
    alert("This item is already in your wishlist!");
  }
};

// Find Product by ID
function findProductById(productId) {
  const products = [
    { id: 1, name: "Glow Serum", description: "This is for long lasting hydration", price: 380 },
    { id: 2, name: "Serum", description: "This is for long lasting hydration", price: 200 },
    { id: 3, name: "CeraVe", description: "This is for long lasting hydration", price: 343 },
    { id: 4, name: "Vitamin C Serum", description: "This is for long lasting hydration", price: 380 },
  ];

  return products.find((product) => product.id === productId);
}

// Update Cart Display
function updateCartDisplay() {
  const cartItemsDiv = document.getElementById("cartList");
  cartItemsDiv.innerHTML = ""; // Clear previous cart items
  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `<strong>${item.name}</strong> - Rs.${item.price}`;
    cartItemsDiv.appendChild(itemDiv);
  });
}

// Update Wishlist Display
function updateWishlistDisplay() {
  const wishlistDiv = document.getElementById("wishlistList");
  wishlistDiv.innerHTML = "";
  wishlist.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `<strong>${item.name}</strong> - Rs.${item.price}`;
    wishlistDiv.appendChild(itemDiv);
  });
}

// Clear Cart
function clearCart() {
  cart = [];
  updateCartDisplay();
  alert("Your cart has been cleared!");
}

//  // Section 2: Bestsellers
//  const bestsellers = products.slice(0, 3);
//  function displayBestsellers() {
//      displayProductsInSection("BestsellersProducts", bestsellers);
//  }

 // Section 3: Button Click
 const btnSection3 = document.getElementById("btnSection3");
 btnSection3.addEventListener("click", () => {
     window.location.href = "https://cdn.shopify.com/s/files/1/0569/2375/0423/t/5/assets/description_image_dos_and_dont_of_skincare_tips_at_home.jpeg?v=1648780179";
 });

 
