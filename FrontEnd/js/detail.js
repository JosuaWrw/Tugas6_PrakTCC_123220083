document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const noteId = params.get("id");

  if (noteId) {
    fetch(`https://tugas5be-935996462481.us-central1.run.app/notes/${noteId}`)
      .then(response => response.json())
      .then(note => {
        document.getElementById("title").innerText = note.title;
        document.getElementById("content").innerText = note.content;
      })
      .catch(error => console.error("Gagal mengambil data:", error));
  } else {
    alert("ID catatan tidak ditemukan!");
    window.location.href = "index.html";
  }
});
