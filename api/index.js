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

// Local Dev: Start Express server normally
if (process.env.VERCEL_ENV !== "production") {
  (async () => {
    try {
      await Connect(); // Connect DB once
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Local server running on http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("Local server failed:", err);
    }
  })();
}

// Production: Export serverless handler
export default async (req, res) => {
  try {
    await Connect(); // Reconnect on each request (serverless cold start)
    return app(req, res);
  } catch (err) {
    console.error("Serverless error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
