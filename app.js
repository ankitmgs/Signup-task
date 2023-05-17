const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./router/userRouter");
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
