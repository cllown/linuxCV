import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.DATABASE_URL || 'data/database.sqlite',
  openrouterApiKey: process.env.OPENROUTER_API_KEY,
  geminiApiKey: process.env.GEMINI_API_KEY,
  adminToken: process.env.ADMIN_TOKEN || 'secret_admin_123',
  env: process.env.NODE_ENV || 'development',
};
