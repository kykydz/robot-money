const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
