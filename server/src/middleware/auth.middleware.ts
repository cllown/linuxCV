import { Request, Response, NextFunction } from "express";
import { config } from "../config/env";

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["x-admin-token"];

  if (token === config.adminToken) {
    return next();
  }

  res.status(401).json({ error: "Unauthorized access" });
};
