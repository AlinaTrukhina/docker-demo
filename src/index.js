const app = require('express')();

app.get('/', (req, res) => {
    res.json({message: 'you are using Docker! Woot 🥇'})
});