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
});
