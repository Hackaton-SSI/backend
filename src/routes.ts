import { Router } from 'express'

const routes = Router()

import Entidade from './controllers/EntidadeController'

routes.get('/', (req, res) => {
  return res.json({mensagem: "Bem vindo a API"})
})

// Rotas de entidade
routes.get('/entidades', Entidade.index);

export default routes