import { Router } from 'express'

const routes = Router()

import Entidade from './controllers/EntidadeController'
import Categoria from './controllers/CategoriaController'
import Usuario from './controllers/UsuarioController'

routes.get('/', (req, res) => {
  return res.json({mensagem: "Bem vindo a API"})
})

// Rotas de entidade
routes.get('/entidades', Entidade.index);


// Rotas de categorias
routes.get('/categorias', Categoria.index)

// Rotas de Usuario
routes.post('/usuario', Usuario.create)
routes.get('/usuario/:id', Usuario.show)

export default routes