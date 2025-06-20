import express from "express"; // import express for creating the server
import { PORT } from "./config/config.js"; // import the PORT from config
import authRoutes from "./routes/auth.route.js"; // import authentication routes
const app = express(); // create an instance of express

app.get("/", (req, res) => {
  res.send("app is running...");
});

app.use("/api/auth", authRoutes); // use auth routes for authentication

app.listen(PORT, () => {
  // set the server to listen on port specified in config

  console.log(`server running on port ${PORT} -> http://localhost:${PORT}/`);
});
