// Helper Functions
function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  
  function getUser() {
    return JSON.parse(localStorage.getItem("user")) || null;
  }
  
  function clearUser() {
    localStorage.removeItem("user");
  }
  
  function showElement(elementId) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("account-info").style.display = "none";
    document.getElementById(elementId).style.display = "block";
  }
  
  function loadAccountPage() {
    const user = getUser();
    if (user) {
      document.getElementById("user-name").textContent = user.name;
      document.getElementById("user-email").textContent = user.email;
      showElement("account-info");
    } else {
      showElement("login-form");
    }
  }
  
  // Event Listeners
  document.addEventListener("DOMContentLoaded", loadAccountPage);
  
  document.getElementById("signup").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    if (!name || !email || !password) {
      alert("All fields are required.");
      return;
    }
  
    saveUser({ name, email, password });
    alert("Account created successfully! You can now log in.");
    showElement("login-form");
  });
  
  document.getElementById("login").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    const user = getUser();
    if (user && user.email === email && user.password === password) {
      alert("Logged in successfully!");
     
    } else {
      alert("Invalid email or password.");
    }
  });
  
  document.getElementById("logout").addEventListener("click", () => {
    clearUser();
    alert("Logged out successfully!");
    showElement("login-form");
  });
  
  document.getElementById("show-signup").addEventListener("click", (event) => {
    event.preventDefault();
    showElement("signup-form");
  });
  
  document.getElementById("show-login").addEventListener("click", (event) => {
    event.preventDefault();
    showElement("login-form");
  });

  document.getElementById("account").addEventListener("click", async () => {
    try {
      const response = await fetch("https://fluff-rowan-leptoceratops.glitch.me");
      const data = await response.json();
      document.getElementById("data").innerText = data.message;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });