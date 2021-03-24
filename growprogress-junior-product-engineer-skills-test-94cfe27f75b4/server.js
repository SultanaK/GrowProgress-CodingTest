const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.use('/images', express.static(__dirname + '/images'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/user-feedback', function(req) {
    console.log("Got feedback!", req);
});

app.listen(8080, function () {
    console.log("listening on port: 8080!");
});
