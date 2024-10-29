app.get('/ucl-matches', async (req, res) => {
    try {
        const response = await axios.get('https://api.football-data.org/v2/competitions/CL/matches', {
            headers: {
                'Authorization': '66b66af17e7f4004961cf2271ecfd1c0' // Your API key
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
        res.status(500).send({ error: error.message });
    }
});
