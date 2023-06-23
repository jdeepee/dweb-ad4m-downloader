"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var port = 3000; // or any port you want the server to run on
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/ad4mDownload', function (req, res) {
    res.download(path.join(__dirname, 'ad4m')); // for example, this file is in the same folder as your server.ts
});
app.get('/fluxDownload', function (req, res) {
    res.download(path.join(__dirname, 'flux')); // for example, this file is in the same folder as your server.ts
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
