function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch("https://notes-be083-935996462481.us-central1.run.app/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      location.href = "index.html";
    } else {
      document.getElementById("errorMsg").textContent = data.message || "Login gagal.";
    }
  })
  .catch(err => {
    console.error("Login error:", err);
    document.getElementById("errorMsg").textContent = "Terjadi kesalahan saat login.";
  });
}
