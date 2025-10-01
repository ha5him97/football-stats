// Fresh ISL standings (all stats reset to 0)
const standings = [
    { position: 1, team: "Bengaluru FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 2, team: "Jamshedpur FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 3, team: "Mohun Bagan SG", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 4, team: "Punjab FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 5, team: "NorthEast United", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 6, team: "Chennaiyin FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 7, team: "Odisha FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 8, team: "Kerala Blasters FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 9, team: "Mumbai City FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 10, team: "FC Goa", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 11, team: "Hyderabad FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 12, team: "Mohammedan SC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 },
    { position: 13, team: "East Bengal FC", played: 0, wins: 0, draws: 0, losses: 0, gd: 0, points: 0 }
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
            <td><strong>${team.points}</strong></td>
        `;
        standingsTable.appendChild(row);
    });

    // Add message row at the bottom
    const messageRow = document.createElement("tr");
    messageRow.innerHTML = `
        <td colspan="8" style="text-align:center; font-weight:bold; color:#c62828; background:#ffe5e5;">
            The ISL will start when it starts
        </td>
    `;
    standingsTable.appendChild(messageRow);
}

// Load standings when DOM is ready
document.addEventListener("DOMContentLoaded", displayStandings);
