const express = require("express");
const authMiddleware = require("./middleware/auth");

const { MongoClient } = require("mongodb");
const app = express();

const connectionString = 'mongodb+srv://theyehs:Win2000!@395mallard.ssll8.mongodb.net/';
(async () => {
    let client = await MongoClient.connect(connectionString,
        { useNewUrlParser: true });

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})();

const middlewares = [authMiddleware];
// TODO: add authentication

/**
 * TASK
 * /task/list:
 * /task/addList
 */
app.get("/task", middlewares, (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});