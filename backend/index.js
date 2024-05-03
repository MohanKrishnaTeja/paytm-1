const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors);
app.use(express.json());

app.use("api/v1",mainRouter);

app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })