const express = require("express");
const cors = require("cors");
const sendMailRouter = require("./routes/sendMailRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server was published on Vercel"));

app.use("/send", sendMailRouter);

app.use((req, res, next) => {
  res.status(404).send({ error: "Not Found" });
});

module.exports = app;
