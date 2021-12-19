const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/**
 * TASK
 * /task/list:
 * /task/addList
 */
app.get("/task", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});