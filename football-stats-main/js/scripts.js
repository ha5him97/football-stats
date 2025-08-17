// public/js/scripts.js
$(document).ready(function () {
    // Fetch matches from the server
    $.ajax({
      url: '/api/matches',
      method: 'GET',
      success: function (matches) {
        const matchesContainer = $('#matches-container');
        matches.forEach((match) => {
          matchesContainer.append(`
            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${match.teamA} vs ${match.teamB}</h5>
                  <p class="card-text">Date: ${match.date}</p>
                </div>
              </div>
            </div>
          `);
        });
      },
      error: function () {
        console.error('Failed to fetch matches.');
      },
    });
  });
  