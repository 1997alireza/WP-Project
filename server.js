const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/27017", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("DB connection is alive");
});

app.use(express.json());
app.use(express.static('./statics'));

app.get('/',function(req,res) {
    res.sendFile('./src/index.html', {root: '.'});
});

app.get('/authentication',function(req,res) {
    res.sendFile('./src/authentication.html', {root: '.'});
});

app.listen(port, () => console.log(`listening on port ${port}!`));
