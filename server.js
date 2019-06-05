const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/wp_project", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("DB connection is alive");
});

app.use(express.json());
app.use(express.static('./statics'));

app.get('/', (req,res) => {
    res.sendFile('./src/index.html', {root: '.'});
});

app.get('/authentication', (req,res) => {
    res.sendFile('./src/authentication.html', {root: '.'});
});

const restaurant_router = require("./routers/restaurant.js");
app.use("/api/restaurants", restaurant_router);

app.listen(port, () => console.log(`listening on port ${port}!`));
