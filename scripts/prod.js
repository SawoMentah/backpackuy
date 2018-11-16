const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'));
});

const port = process.env.PORT || 4000;

app.listen(port);
