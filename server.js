const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('index.html');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
