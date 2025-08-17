// Toggle stats table visibility
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleStats");
  const statsTable = document.getElementById("statsTable");

  toggleBtn.addEventListener("click", () => {
    if (statsTable.style.display === "none") {
      statsTable.style.display = "table";
      toggleBtn.textContent = "Hide Stats";
    } else {
      statsTable.style.display = "none";
      toggleBtn.textContent = "Show Stats";
    }
  });

  // Start with stats visible
  statsTable.style.display = "table";
});
