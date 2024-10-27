// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/matches', (req, res) => {
  const matches = [
    { teamA: 'Team 1', teamB: 'Team 2', date: '2024-10-30' },
    { teamA: 'Team 3', teamB: 'Team 4', date: '2024-11-02' },
  ];
  res.json(matches);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
