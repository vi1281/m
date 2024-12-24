// Отримуємо електронну пошту з localStorage
const email = localStorage.getItem("userEmail");

// Перевіряємо, чи існує електронна пошта
if (email) {
  // Якщо електронна пошта існує, вставляємо її в елемент на сторінці
  document.getElementById("email").textContent = email;
} else {
  // Якщо електронна пошта не знайдена, перенаправляємо на сторінку входу
  window.location.href = "index.html";
}
