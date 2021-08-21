import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Entidade from '../models/Entidade'

export default {
  async index(req: Request, res: Response){
    const entidadeRepository = getRepository(Entidade)

    const entidade = await entidadeRepository.find()

    return res.json(entidade);
  }
}