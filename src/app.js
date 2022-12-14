const express = require('express')
const app = express()

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const indexRouter = require("./routers/index");
const indexRouter2 = require("./routers/index2");
const todoRouter = require("./routers/todo");

app.use("/", indexRouter);
app.use("/v2.0", indexRouter2);
app.use("/todo", todoRouter);


module.exports = app;