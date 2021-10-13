const express = require("express");

const server = express();

server.use(express.json());

//Test endpoint
server.get("/", (req, res)=>{
    res.status(200).json("API is running")
})

module.exports = server;
