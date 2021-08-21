import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Usuario from '../models/Usuarios'

export default {
  async create(req: Request, res: Response){
    const {
      nome,
      email,
      endereco,
      cep,
      estado,
      cidade,
      numeroCasa,
      complemento,
    } = req.body

    const usuariosRepository = getRepository(Usuario)

    const data = {
      nome,
      email,
      endereco,
      cep,
      estado,
      cidade,
      numeroCasa,
      complemento,
      imagem: "teste"
    }

    const usuario = usuariosRepository.create(data)

    await usuariosRepository.save(usuario)

    return res.json(usuario)
  },

  async show(req: Request, res: Response){
    const { id } = req.params
    const usuariosRepository = getRepository(Usuario)
    const usuario = await usuariosRepository.findOneOrFail(id)

    

    return res.json(usuario)
  }
}