import express from "express";
import UserController from "./controllers/UserController";

const app = express();
app.use(express.json());

// Register controller routes
UserController.registerRoutes(app);

export default app;
