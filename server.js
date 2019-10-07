require('dotenv').config();
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();
const port = process.env.PORT || 3008;

app.use(cors())

app.use(express.static(path.join(__dirname, ".", "build")))

app.get("/getfacts" , (req, res) => {
    axios.get("https://cat-fact.herokuapp.com/facts")
        .then((response=>{
            res.status(200).send(response.data)
        }))
        .catch(e=>res.status(500).send(e))
} )

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))