import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDD7wYR16lWYvHN6FlvZu9UpLzXW8dw5Mo",
    authDomain: "login-72844.firebaseapp.com",
    projectId: "login-72844",
    storageBucket: "login-72844.firebasestorage.app",
    messagingSenderId: "856995387716",
    appId: "1:856995387716:web:00a49160d4a84e08c29f11"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get buttons
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

// Event listener for login
loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Save email to localStorage for home page
      localStorage.setItem("userEmail", user.email);
      // Redirect to home page
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});

// Event listener for register
registerButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Save email to localStorage for home page
      localStorage.setItem("userEmail", user.email);
      // Redirect to home page
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});
