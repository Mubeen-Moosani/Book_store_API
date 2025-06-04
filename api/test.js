import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Mubeen!");
});

app.listen(5000, () => {
  console.log("Local server running on http://localhost:5000");
});
