const express = require("express");
//importing accounts-router
const accountsRouter = require("./accounts/accounts-router")

const server = express();

server.use(express.json());
//calling the accounts-router
server.use("/api/accounts", accountsRouter)
//Test endpoint
server.get("*", (req, res)=>{
    res.status(200).json("API is running")
})

module.exports = server;
