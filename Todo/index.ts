import express from "express";
const routes = express.Router();


routes.use("/todo",require("./Post/Post"))


module.exports = routes;