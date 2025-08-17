async function fetchUCLTable() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key if needed
    const apiUrl = 'https://api.football-data.org/v2/competitions/CL/standings';

    try {
        const response = await fetch(apiUrl, {
            headers: { 'X-Auth-Token': apiKey }
        });
        const data = await response.json();

        const standings = data.standings[0].table; // Adjust if necessary
        const tableBody = document.getElementById('table-body');

        standings.forEach((team, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${team.team.name}</td>
                <td>${team.playedGames}</td>
                <td>${team.won}</td>
                <td>${team.draw}</td>
                <td>${team.lost}</td>
                <td>${team.points}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching UCL table data:", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUCLTable);
