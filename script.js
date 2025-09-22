let cart = [];

// Add to Cart functionality
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", e => {
    const product = e.target.closest(".product");
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    cart.push({ name, price });
    updateCartDisplay();
  });
});

// Show cart page
document.getElementById("cart-link").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("products-page").classList.add("hidden");
  document.getElementById("cart-page").classList.remove("hidden");
});

// Back to shop
document.getElementById("back-to-shop").addEventListener("click", () => {
  document.getElementById("cart-page").classList.add("hidden");
  document.getElementById("products-page").classList.remove("hidden");
});

// Update cart display
function updateCartDisplay() {
  document.getElementById("cart-count").textContent = cart.length;

  const tbody = document.querySelector("#cart-table tbody");
  tbody.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td><button class="remove-item" data-index="${index}">X</button></td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;

  // Remove items functionality
  document.querySelectorAll(".remove-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.index;
      cart.splice(idx, 1);
      updateCartDisplay();
    });
  });
}

// Smooth scroll from "Shop Now" button
document.getElementById("shop-now").addEventListener("click", () => {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
// Shopping cart
let cartCount = 0;
let cartItems = [];
const cartBtn = document.getElementById("cartBtn");
const cartCountDisplay = document.getElementById("cartCount");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartPanel = document.getElementById("cartPanel");
const closeCartBtn = document.getElementById("closeCart");
const cartItemsList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Add to cart functionality
addToCartButtons.forEach(button => {
  button.addEventListener("click", e => {
    const productCard = e.target.closest(".product-card");
    const name = productCard.querySelector("h3").textContent;
    const price = parseFloat(productCard.querySelector("p").textContent.replace("$", ""));

    // Update cart array
    cartItems.push({ name, price });
    cartCount++;
    cartCountDisplay.textContent = cartCount;

    // Update cart UI
    const li = document.createElement("li");
    li.textContent = `${name} - $${price.toFixed(2)}`;
    cartItemsList.appendChild(li);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Animate cart icon
    cartBtn.classList.add("cart-bounce");
    setTimeout(() => cartBtn.classList.remove("cart-bounce"), 300);

    // Open cart panel briefly
    cartPanel.classList.add("active");
    setTimeout(() => cartPanel.classList.remove("active"), 2000);
  });
});

// Open cart manually
cartBtn.addEventListener("click", () => {
  cartPanel.classList.add("active");
});

// Close cart
closeCartBtn.addEventListener("click", () => {
  cartPanel.classList.remove("active");
});

// Contact form handler
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  formMessage.textContent = "Thanks for reaching out! We'll get back to you soon 🐾";
  form.reset();
});
