import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import fs from "fs";
import path from "path";
import { config } from "./config/env";

class DatabaseService {
  private static instance: Database | null = null;

  private constructor() {}

  public static async getInstance(): Promise<Database> {
    if (!DatabaseService.instance) {
      const dbPath = path.resolve(__dirname, "../../", config.databaseUrl);
      
      // Ensure the directory exists
      const dbDir = path.dirname(dbPath);
      if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
      }

      DatabaseService.instance = await open({
        filename: dbPath,
        driver: sqlite3.Database,
      });

      await this.initTables(DatabaseService.instance);
      console.log("Database connected at", dbPath);
    }
    return DatabaseService.instance;
  }

  private static async initTables(db: Database) {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS chat_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }
}

export const getDb = () => DatabaseService.getInstance();
