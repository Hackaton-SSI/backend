import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Acao from '../models/Acao'

export default {
  async index(req: Request, res: Response) {
    const categoriaRepostory = await getRepository(Acao)

    const acoes = await categoriaRepostory.find();

    return res.json(acoes)
  }
}