document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const note = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
    };
  
    fetch("https://tugas5be-935996462481.us-central1.run.app", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
      window.location.href = "index.html";
    });
  });
  