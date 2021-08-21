import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()

app.listen(process.env.PORT || 3333, () => {
 console.log('🎲 ouvindo na porta -> ', process.env.PORT || 3333) 
})