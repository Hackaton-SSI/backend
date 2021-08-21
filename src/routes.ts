import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({mensagem: "Bem vindo a API"})
})

export default routes