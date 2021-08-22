import { createConnection } from "typeorm"
import * as dotenv from "dotenv"

dotenv.config()

createConnection({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "123456789",
  database: process.env.DB_DATABASE || "hackaton",
  migrations: ["./src/database/migrations/*ts"],
  entities: ["./src/models/*ts"],
  cli: {
    migrationsDir: "./src/database/migrations"
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}).then(() => console.log("🎲 Conectado ao banco de dados"))
