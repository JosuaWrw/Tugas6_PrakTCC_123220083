const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");

fetch(`https://tugas5be-935996462481.us-central1.run.app/notes/${noteId}`)
  .then(response => response.json())
  .then(note => {
    document.getElementById("title").value = note.title;
    document.getElementById("content").value = note.content;
  });

document.getElementById("edit-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const note = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
  };

  fetch(`https://notes-be083-935996462481.us-central1.run.app/notes/${noteId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  }).then(() => {
    window.location.href = "index.html";
  });
});
