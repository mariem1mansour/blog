import express from "express";
import dbConnections from "./databases/dbConnections.js";
import userRouter from "./src/modules/user/user.routes.js";
const app = express();
const port = 3000;

app.use(userRouter);
app.use(express.json())

dbConnections();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
