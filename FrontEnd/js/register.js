function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const password = document.getElementById("password").value;

  fetch("https://notes-be083-935996462481.us-central1.run.app/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, gender, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "Success") {
      alert("Pendaftaran berhasil! Silakan login.");
      location.href = "login.html";
    } else {
      document.getElementById("errorMsg").textContent = data.message || "Gagal mendaftar.";
    }
  })
  .catch(err => {
    console.error("Register error:", err);
    document.getElementById("errorMsg").textContent = "Terjadi kesalahan saat mendaftar.";
  });
}
