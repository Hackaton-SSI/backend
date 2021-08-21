import { createConnection } from "typeorm"

createConnection().then(() => {
  console.log('🎲 Connexão feita')
})