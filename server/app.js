const router = require("./routes/routes");
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
// app.use("/", express.static(distPath));

app.use("/team-details", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
