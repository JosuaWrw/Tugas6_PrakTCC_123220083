document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const note = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
    };
  
    fetch("https://notes-be083-935996462481.us-central1.run.app/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
      window.location.href = "index.html";
    });
  });
  