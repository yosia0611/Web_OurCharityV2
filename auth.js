document.addEventListener("DOMContentLoaded", () => {
  const authButton = document.getElementById("auth-button");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  function renderAuthButton() {
  	if (!authButton) return;
  
  	if (isLoggedIn) {
  	  authButton.textContent = "Logout";
  	  authButton.href = "#";
  	  authButton.onclick = function () {
  	  	localStorage.removeItem("isLoggedIn");
  	  	alert("Berhasil logout!");
  	  	location.reload();
  	  };
  	} else {
  	  authButton.textContent = "Masuk";
  	  authButton.href = "login.html"; // Ganti sesuai dengan file login kamu
  	}
  }

  renderAuthButton();
});