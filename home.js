// Отримую електронну пошту з localStorage
const email = localStorage.getItem("userEmail");

// Перевіряю, чи існує електронна пошта
if (email) {
  // Якщо електронна пошта існує, вставляю її в елемент на сторінці
  document.getElementById("email").textContent = email;
} else {
  // Якщо електронна пошта не знайдена, перенаправляю на сторінку входу
  window.location.href = "index.html";
}
