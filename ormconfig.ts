import * as dotenv from "dotenv"

dotenv.config()

export default {
  "type": "postgres",
  "host": process.env.DB_HOST || "localhost",
  "port": process.env.DB_PORT || 5432,
  "username": process.env.DB_USER || "postgres",
  "password": process.env.DB_PASS || "123456789",
  "migrations": ["./src/database/migrations/*ts"],
  "entities": ["./src/models/*ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}