require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require("path")
const app = express();
const port = process.env.PORT || 3007;

app.use(cors())

app.use(express.static(path.join(__dirname, ".", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))