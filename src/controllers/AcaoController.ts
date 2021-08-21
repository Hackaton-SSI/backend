import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Acao from '../models/Acao'

export default {
  async index(req: Request, res: Response) {
    const categoriaRepostory = await getRepository(Acao)

    const acoes = await categoriaRepostory.find();

    return res.json(acoes)
  },

  async create(req: Request, res: Response) {
    const { nome, endereco, descricao, data } = req.body
    
    const acaoRepository = getRepository(Acao)

    const acaoData = {nome, endereco, descricao, data}

    const acao = acaoRepository.create(acaoData)

    await acaoRepository.save(acao)

    return res.status(201).json(acao)

  }
}