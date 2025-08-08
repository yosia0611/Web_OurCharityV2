document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = form.username.value;
      const password = form.password.value;

      //Dummy akun
      const dummyUsername = "admin";
      const dummyPassword = "123";

      if (username === dummyUsername && password === dummyPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login berhasil!");
        window.location.href = "index.html"; // Kembali ke home   
      } else {
        alert("Username atau password salah.");
      }
    });
  }
});