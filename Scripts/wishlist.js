let wishlist = [];

function loadWishlist() {
    const wishlistItems = document.getElementById("wishlist-items");

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = "<p>Your wishlist is empty!</p>";
    } else {
        wishlistItems.innerHTML = wishlist.map(item => `
            <div class="wishlist-item">
                <h2>${item.name}</h2>
                <p>Price: $${item.price}</p>
                <button onclick="removeFromWishlist('${item.id}')">Remove</button>
                <button onclick="addToCart('${item.id}')">Add to Cart</button>
            </div>
        `).join("");
    }
}

function addToWishlist(id) {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(product => product.id === id);
            if (!wishlist.find(item => item.id === id)) {
                wishlist.push(product);
                loadWishlist();
            } else {
                alert("Item is already in your wishlist!");
            }
        });
}

function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    loadWishlist();
}
