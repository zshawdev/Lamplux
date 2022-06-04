const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/simple-style", (req, res) => {
    res.sendFile(path.join(__dirname, "/simple-style.html"));
})

app.get("/tower-records", (req, res) => {
    res.sendFile(path.join(__dirname, "/tower-records.html"));
})

app.get("/interviews", (req, res) => {
    res.sendFile(path.join(__dirname, "/interviews.html"));
})

app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "/404.html"));
})

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})