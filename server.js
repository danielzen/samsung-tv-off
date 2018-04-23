const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

const port = process.env.PORT || config.get("port");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
require("./routes")(app);

app.listen(port, () => {
  console.log("We are live on " + port);
});
