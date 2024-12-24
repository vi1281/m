import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDRhYwxR2O1zeQFZQf_A70Jf4zNESlBfPc",
  authDomain: "dbase-a9d5a.firebaseapp.com",
  projectId: "dbase-a9d5a",
  storageBucket: "dbase-a9d5a.firebasestorage.app",
  messagingSenderId: "16367447538",
  appId: "1:16367447538:web:0eb42e275dbb4d2860cf6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Отримую кнопки для входу та реєстрації
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

// Додаю слухач події для кнопки входу
loginButton.addEventListener("click", function (event) {
  event.preventDefault(); // Запобігаю стандартній поведінці форми (перезавантаженню сторінки)

  // Отримую значення полів введення для електронної пошти та пароля
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // чи заповнені обидва поля
  if (!email || !password) {
    alert("Please enter both email and password."); //попередження, якщо поля порожні
    return;
  }

  // Використовую Firebase для входу користувача
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; // Отримую об'єкт користувача
      localStorage.setItem("userEmail", user.email); // Зберігаю електронну пошту у localStorage
      window.location.href = "home.html"; //перекидую користувача на головну сторінку
    })
    .catch((error) => {
      alert(`Error: ${error.message}`); // помилка, якщо щось пішло не так
    });
});
