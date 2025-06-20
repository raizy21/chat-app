import express from "express"; // import express for creating the server
import { PORT } from "./config/config.js"; // import the PORT from config

const app = express(); // create an instance of express

app.get("/", (req, res) => {
  res.send("app is running...");
});

app.listen(PORT, () => {
  // set the server to listen on port specified in config

  console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`);
});
