document.addEventListener("DOMContentLoaded", () => {
  fetch("https://notes-be083-935996462481.us-central1.run.app/notes", {
    headers: {
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
  }
  })
      .then(response => response.json())
      .then(notes => {
          const notesTable = document.getElementById("notesTable");
          notesTable.innerHTML = "";

          notes.forEach((note, index) => {
              const row = document.createElement("tr");

              row.innerHTML = `
                  <td>${index + 1}</td>
                  <td>${note.title}</td>
                  <td>
                      <button class="button is-small is-info" onclick="viewDetail(${note.id})">Detail</button>
                      <button class="button is-small is-warning" onclick="editNote(${note.id})">Edit</button>
                      <button class="button is-small is-danger" onclick="deleteNote(${note.id})">Hapus</button>
                  </td>
              `;

              notesTable.appendChild(row);
          });
      })
      .catch(error => console.error("Gagal mengambil data:", error));
});

function viewDetail(id) {
  window.location.href = `detailData.html?id=${id}`;
}

function editNote(id) {
  window.location.href = `editData.html?id=${id}`;
}

function deleteNote(id) {
  if (confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
      fetch(`https://notes-be083-935996462481.us-central1.run.app/${id}`, { method: "DELETE" })
          .then(() => location.reload())
          .catch(error => console.error("Gagal menghapus catatan:", error));
  }
}

function logout() {
  localStorage.removeItem("accessToken");
  location.href = "login.html";
}