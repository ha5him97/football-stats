// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/players', (req, res) => {
  const players = [
    { name: 'Player 1', position: 'Forward', goals: 12, assists: 7 },
    { name: 'Player 2', position: 'Midfielder', goals: 5, assists: 10 },
    { name: 'Player 3', position: 'Defender', goals: 2, assists: 4 },
  ];
  res.json(players);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
