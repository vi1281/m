// Перевірка, чи є електронна пошта в localStorage
if (!localStorage.getItem("userEmail")) {
    window.location.href = "index.html"; // Перенаправлення на сторінку входу, якщо немає електронної пошти
  }
  
  // Функція для виходу
  function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "index.html"; // Перенаправлення на сторінку реєстрації
  }
  
  // Виведення привітального повідомлення
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("welcomeMessage").textContent = `Welcome, ${localStorage.getItem("userEmail")}`;
  });
  