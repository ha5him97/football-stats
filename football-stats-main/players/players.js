// public/js/players.js
$(document).ready(function () {
    // Fetch players from the server
    $.ajax({
      url: '/api/players',
      method: 'GET',
      success: function (players) {
        const playersContainer = $('#players-container');
        players.forEach((player) => {
          playersContainer.append(`
            <tr>
              <td>${player.name}</td>
              <td>${player.position}</td>
              <td>${player.goals}</td>
              <td>${player.assists}</td>
            </tr>
          `);
        });
      },
      error: function () {
        console.error('Failed to fetch players.');
      },
    });
  });
  
  