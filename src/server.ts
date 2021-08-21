import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import * as dotenv from 'dotenv'

import routes from './routes'

dotenv.config()

const app = express()

app.use(express.json())
.use(morgan('tiny'))
.use(cors())
.use(routes)

app.listen(process.env.PORT || 3333, () => {
 console.log('🎲 ouvindo na porta -> ', process.env.PORT || 3333) 
})