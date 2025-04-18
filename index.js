import express from "express";
import Connect from "./db/db.js";
import "dotenv/config";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

Connect()
  .then(() => {
    console.log("Mongodb Connected Sucessfully");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(
      "Something went Wrong while connecting with Mongom DB Error:",
      err
    );
  });

import bookRouter from "./src/routes/book.route.js";
app.use("/api/books", bookRouter);

app.get("/", (req, res) => {
  res.send("Hello Mubeen!");
});
