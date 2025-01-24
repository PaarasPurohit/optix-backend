import { Request, Response, Express } from "express";
import User from "../models/user";

export default class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  static registerRoutes(app: Express) {
    app.post("/users", UserController.createUser);
    app.get("/users", UserController.getUsers);
  }
}
