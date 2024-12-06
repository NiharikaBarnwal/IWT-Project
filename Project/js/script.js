const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('login');

// Predefined credentials
const validEmail = "nisnb@gmail.com";
const validPassword = "password123";

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from redirecting

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    if (emailInput === validEmail && passwordInput === validPassword) {
        // Redirect to home2.html on successful login
        window.location.href = "home_2.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
