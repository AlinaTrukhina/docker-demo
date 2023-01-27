const app = require('express')();

app.get('/', (req, res) => {
    res.json({message: 'you are using Docker! Woot 🥇'})
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));