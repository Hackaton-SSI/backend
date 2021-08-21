import { Router } from 'express'

const routes = Router()

import Entidade from './controllers/EntidadeController'
import Categoria from './controllers/CategoriaController'
import Usuario from './controllers/UsuarioController'
import Acao from './controllers/AcaoController'

routes.get('/', (req, res) => {
  return res.json({mensagem: "Bem vindo a API"})
})

// Rotas de entidade
routes.get('/entidades', Entidade.index);


// Rotas de categorias
routes.get('/categorias', Categoria.index)
routes.post('/categoria', Categoria.create)
routes.get('/categorias/:palavra', Categoria.show)

// Rotas de Usuario
routes.post('/usuario', Usuario.create)
routes.get('/usuario/:id', Usuario.show)

// Rotas de Ação
routes.post('/acao', Acao.create)

export default routes