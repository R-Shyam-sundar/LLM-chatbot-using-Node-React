const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname));

app.post('/submit', async (req, res) => {
    const question = req.body.question;

    const answer = "This is the answer from Python.";

    res.json({ answer });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

