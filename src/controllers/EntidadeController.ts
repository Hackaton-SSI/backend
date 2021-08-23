import { Request, Response } from 'express'
import { getRepository, Like } from 'typeorm'

import Entidade from '../models/Entidade'
import Categoria from '../models/Categorias'

export default {
  async index(req: Request, res: Response){
    const entidadeRepository = getRepository(Entidade)

    const entidade = await entidadeRepository.find()

    return res.json(entidade);
  },

  async create(req: Request, res: Response) {
    const {
      nome,
      endereco,
      cep,
      estado,
      cidade,
      numeroCasa,
      complemento,
      descricao,
      emails,
      telefones,
      mantenedor
    } = req.body
    const entidadeRepository = getRepository(Entidade)

    const data = {
      nome,
      endereco,
      cep,
      estado,
      cidade,
      numeroCasa,
      complemento,
      descricao,
      emails,
      telefones,
      mantenedor
    }

    const entidade = entidadeRepository.create(data)
    await entidadeRepository.save(entidade)

    return res.status(201).json(entidade)
  },

  async showByName(req: Request, res: Response) {
    const { nome } = req.params
console.log(nome)
    const entidadeRepository = getRepository(Entidade)

    const entidades = await entidadeRepository.find({
      nome: Like(`%${nome}%`)
    })

    return res.json(entidades)
  }
}