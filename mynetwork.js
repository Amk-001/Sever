const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/data', (req, res) => {
    res.json({ message: "Secure JSON Data" });
});

// SSL Certificate
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};

https.createServer(options, app).listen(443, () => {
    console.log("Secure Server running on HTTPS");
});
