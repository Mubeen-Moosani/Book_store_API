// import express from "express";
// import Connect from "./db/db.js";
// import "dotenv/config";
// import cors from "cors";
// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// Connect()
//   .then(() => {
//     console.log("Mongodb Connected Sucessfully");

//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log(
//       "Something went Wrong while connecting with Mongom DB Error:",
//       err
//     );
//   });

// import bookRouter from "./src/routes/book.route.js";
// app.use("/api/books", bookRouter);

// app.get("/", (req, res) => {
//   res.send("Hello Mubeen!");
// });

// serverless

import express from "express";
import Connect from "../db/db.js";
import "dotenv/config";
import cors from "cors";

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Routes
import bookRouter from "../src/routes/book.route.js";
app.use("/api/books", bookRouter);

app.get("/", (req, res) => {
  res.send("Hello Mubeen!");
});

// Connect to DB and start server (modified for serverless)
let isDbConnected = false;

const ensureDbConnection = async () => {
  if (!isDbConnected) {
    try {
      await Connect();
      isDbConnected = true;
      console.log("MongoDB Connected Successfully");
    } catch (err) {
      console.log("Error connecting to MongoDB:", err);
      throw err;
    }
  }
};

// This is the serverless handler
export default async (req, res) => {
  try {
    await ensureDbConnection();
    return app(req, res);
  } catch (err) {
    console.error("Serverless function error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
