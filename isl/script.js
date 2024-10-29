// Sample ISL standings data
const standings = [
    { position: 1, team: "Benglaru", played: 6, wins: 5, draws: 1, losses: 0, gd: 10, points: 16 },
    { position: 2, team: "Jamshedpur", played: 6, wins: 4, draws: 0, losses: 2, gd: -1, points: 12 },
    { position: 3, team: "Mohun Bagan", played: 5, wins: 3, draws: 1, losses: 1, gd: 3, points: 10 },
    { position: 4, team: "Punjab FC", played: 4, wins: 3, draws: 0, losses: 1, gd: 3, points: 9 },
    { position: 5, team: "NorthEast United", played: 6, wins: 2, draws: 2, losses: 2, gd: 4, points: 8 },
    { position: 6, team: "Chennayin", played: 5, wins: 2, draws: 2, losses: 1, gd: 1, points: 8 },
    { position: 7, team: "Odisha FC", played: 6, wins: 2, draws: 2, losses: 2, gd: 0, points: 8 },
    { position: 8, team: "Kerala Blasters FC", played: 6, wins: 2, draws: 2, losses: 2, gd: -1, points: 8 },
    { position: 9, team: "Mumabi City", played: 5, wins: 1, draws: 3, losses: 1, gd: 0, points: 6 },
    { position: 10, team: "Goa", played: 6, wins: 1, draws: 3, losses: 2, gd: -1, points: 6 },
    { position: 11, team: "Hyderabad", played: 5, wins: 1, draws: 1, losses: 3, gd: -2, points: 4},
    { position: 12, team: "Mohammeda sc", played: 6, wins: 1, draws: 1, losses: 4, gd: -8, points: 4},
    { position: 13, team: "East Bengal", played: 6, wins: 0, draws: 0, losses: 6, gd: -8, points: 0},
];

// Function to display standings in the table
function displayStandings() {
    const standingsTable = document.getElementById("isl-standings");
    standings.forEach(team => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${team.position}</td>
            <td>${team.team}</td>
            <td>${team.played}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.gd}</td>
            <td>${team.points}</td>
        `;
        standingsTable.appendChild(row);
    });
}

// Load standings when the DOM is ready
document.addEventListener("DOMContentLoaded", displayStandings);
