// Sample data for matches
const matches = [
   
    { homeTeam: "juventus", awayTeam: "Arsenal", date: "2024-11-12", time: "11:15 PM" },
    { homeTeam: "st.polten", awayTeam: "Barca", date: "2024-11-12", time: "11:15 PM" },
    { homeTeam: "Man City", awayTeam: "hammarby", date: "2024-11-13", time: "1:30 PM" },
    { homeTeam: "Bayern ", awayTeam: "valerenga", date: "2024-11-03", time: "1:30 PM" },
    { homeTeam: "R.Madrid", awayTeam: "Twente", date: "2024-11-13", time: "11:15 PM" },
    { homeTeam: "Galatasary", awayTeam: "wolfsburg", date: "2024-11-03", time: "11:15 PM" },
    { homeTeam: "Roma", awayTeam: "Lyon", date: "2024-11-14", time: "1:30 PM" },
    { homeTeam: "chelsea", awayTeam: "celic", date: "2024-11-14", time: "1:30 PM" },
   ];
const matchesPerPage = 20;
let currentPage = 1;

function displayMatches(page) {
  const matchList = document.getElementById("matches");
  matchList.innerHTML = "";

  const startIndex = (page - 1) * matchesPerPage;
  const endIndex = startIndex + matchesPerPage;
  const pageMatches = matches.slice(startIndex, endIndex);

  pageMatches.forEach(match => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${match.homeTeam} vs ${match.awayTeam}</span>
      <span>${match.date} | ${match.time}</span>
    `;
    matchList.appendChild(listItem);
  });
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayMatches(currentPage);
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPage < Math.ceil(matches.length / matchesPerPage)) {
    currentPage++;
    displayMatches(currentPage);
  }
});

displayMatches(currentPage); // Initial load
