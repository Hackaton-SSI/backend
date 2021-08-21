import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Categorias from '../models/Categorias'

export default {
  async index (req: Request, res: Response) {
    const categoriaRepository = getRepository(Categorias)

    const categorias = await categoriaRepository.find();

    return res.json(categorias)
  }
}