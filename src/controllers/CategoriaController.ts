import { Request, Response } from 'express'
import { getRepository, Like } from 'typeorm'

import Categorias from '../models/Categorias'
import Entidade from '../models/Entidade'
import Entidades from '../models/Entidade'

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
  },

  async findEntidadeByCategoria(req: Request, res: Response) {
    const { categoria } = req.query

    let categorias: number[] = []

    if(Array.isArray(categoria)){
      categoria.forEach(cat => {
        categorias.push(parseInt(cat as string))
      })
    } else {
      categorias.push(parseInt(categoria as string))
    }

    const entidades = categorias.map(async (cat, id) => {
      const cate = await getRepository(Categorias)
      .createQueryBuilder("categoria")
      .where("categoria.id = :id", {id: cat})
      .leftJoinAndSelect("categoria.entidades", "entidades")
      .getOne()


      console.log(cate)
      if(cate && cate.entidades) return cate.entidades
    })

    await Promise.all(entidades)

    return res.json({entidades})
  }
}