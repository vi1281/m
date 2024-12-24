// Отримую електронну пошту з localStorage
const email = localStorage.getItem("userEmail");

// чи існує електронна пошта
if (email) {
  // Якщо електронна пошта існує, вставляю її в елемент на сторінці
  document.getElementById("email").textContent = email;
} else {
  // Якщо електронна пошта не знайдена, перенаправляю назад на сторінку входу
  window.location.href = "index.html";
}
