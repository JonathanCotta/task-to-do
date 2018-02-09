const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use("/", require("./routes"));

app.listen(port, () => console.log(`running at localhost:${port}/api/  press ctrl + c to stop \n`));