import { Router } from 'express'

const routes = Router()

import Entidade from './controllers/EntidadeController'
import Categoria from './controllers/CategoriaController'

routes.get('/', (req, res) => {
  return res.json({mensagem: "Bem vindo a API"})
})

// Rotas de entidade
routes.get('/entidades', Entidade.index);


// Rotas de categorias
routes.get('/categorias', Categoria.index)

export default routes