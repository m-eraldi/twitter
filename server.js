const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendfile('index.html');
});

app.get('/signin', (req, res) => {
  res.sendfile('./public/index.html');
});

app.listen(port, () => console.log(`App running on port ${port}`));
