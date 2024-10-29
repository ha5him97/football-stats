function filterMatches() {
    const filterText = document.getElementById("team-filter").value.toLowerCase();
    const filteredMatches = matches.filter(match =>
      match.homeTeam.toLowerCase().includes(filterText) || 
      match.awayTeam.toLowerCase().includes(filterText)
    );
    displayMatches(1, filteredMatches); // Display first page of filtered matches
  }
  