import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Конфігурація Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyDD7wYR16lWYvHN6FlvZu9UpLzXW8dw5Mo",
  authDomain: "login-72844.firebaseapp.com",
  projectId: "login-72844",
  storageBucket: "login-72844.firebasestorage.app",
  messagingSenderId: "856995387716",
  appId: "1:856995387716:web:00a49160d4a84e08c29f11"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Отримую кнопки для входу та реєстрації
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

// Додаю слухач події для кнопки входу
loginButton.addEventListener("click", function (event) {
  event.preventDefault(); // Запобігаю стандартній поведінці форми

  // Отримую значення полів введення для електронної пошти та пароля
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Перевіряю, чи заповнені обидва поля
  if (!email || !password) {
    alert("Please enter both email and password."); // Якщо поля порожні
    return;
  }

  // Використовую Firebase для входу користувача
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; // Отримую об'єкт користувача
      localStorage.setItem("userEmail", user.email); // Зберігаю електронну пошту у localStorage
      window.location.href = "home.html"; // Перенаправляю на головну сторінку
    })
    .catch((error) => {
      alert(`Error: ${error.message}`); // Виводжу повідомлення про помилку
    });
});

// Додаю слухач події для кнопки реєстрації
registerButton.addEventListener("click", function (event) {
  event.preventDefault(); // Запобігаю стандартній поведінці форми

  // Отримую значення полів введення для електронної пошти та пароля
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Перевіряю, чи заповнені обидва поля
  if (!email || !password) {
    alert("Please enter both email and password."); // Якщо поля порожні
    return;
  }

  // Використовую Firebase для реєстрації користувача
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; // Отримую об'єкт користувача
      localStorage.setItem("userEmail", user.email); // Зберігаю електронну пошту у localStorage
      window.location.href = "home.html"; // Перенаправляю на головну сторінку
    })
    .catch((error) => {
      alert(`Error: ${error.message}`); // Виводжу повідомлення про помилку
    });
});
