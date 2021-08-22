import { createConnection } from "typeorm"
import * as dotenv from "dotenv"

dotenv.config()

createConnection().then(() => console.log("🎲 Conectado ao banco de dados"))
