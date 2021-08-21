import { Request, Response } from 'express'
import { getRepository, Like } from 'typeorm'

import Categorias from '../models/Categorias'

export default {
  async index (req: Request, res: Response) {
    const categoriaRepository = getRepository(Categorias)

    const categorias = await categoriaRepository.find();

    return res.json(categorias)
  },

  async show (req: Request, res: Response) {
    const { palavra } = req.params

    const categoriaRepository = getRepository(Categorias)

    const categorias = await categoriaRepository.find({
      nome: Like(`${palavra}%`)
    })

    return res.json(categorias)
  },

  async create (req: Request, res: Response) {
    const {
      nome,
      cor
    } = req.body

    const data = {nome, cor, imagem: ""}

    const categoriaRepository = getRepository(Categorias)

    const categoria = categoriaRepository.create(data)

    await categoriaRepository.save(categoria);

    return res.status(201).json(categoria)
  }
}