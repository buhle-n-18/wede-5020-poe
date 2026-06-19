// Enquiry form validation
document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        document.getElementById("response").innerHTML = "Please fill in all fields.";
    } else {
        document.getElementById("response").innerHTML =
            "Thank you " + name + "! Your enquiry has been submitted.";
    }
});

// Redirect Order Now button to menu page
document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.querySelector(".order-btn");
  if (orderBtn) {
    orderBtn.addEventListener("click", () => {
      window.location.href = "menu.html"; // change if your menu file is services.html
    });
  }
});

// Cart system
let cart = [];
let total = 0;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R${item.price}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your order! Total: R" + total);
    // Reset cart
    cart = [];
    total = 0;
    updateCart();
  }
}

// Search functionality
function searchMenu() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const items = document.querySelectorAll(".menu-item");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? "" : "none";
  });
}
