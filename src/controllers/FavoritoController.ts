import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Usuario from '../models/Usuarios'
import Acao from '../models/Acao'
import Entidade from '../models/Entidade'

export default {
  async favoritoAcao(req: Request, res: Response) {
    const { usuarioId, acaoId } = req.body
    const usuariosRepository = getRepository(Usuario)
    const usuario = await usuariosRepository.findOne(usuarioId, 
      {
        relations: ['acoesFavoritas']
      })

    if(!usuario){
      return res.status(401).json({Erro: "Usuário não encontrado"})
    }


    const acaoRepository = getRepository(Acao)
    const acao = await acaoRepository.findOne(acaoId)
    if(!acao){
      return res.status(401).json({Erro: "acao não encontrada"})
    }

    usuario.acoesFavoritas.push(acao)

    await usuariosRepository.save(usuario);

    return res.json(usuario)
  },

  async favoritoEntidade(req: Request, res: Response) {
    const { usuarioId, entidadeId } = req.body
    const usuariosRepository = getRepository(Usuario)
    const usuario = await usuariosRepository.findOne(usuarioId, 
      {
        relations: ['entidadesFavoritas']
      })

    if(!usuario){
      return res.status(401).json({Erro: "Usuário não encontrado"})
    }

    const entidadeRepository = getRepository(Entidade)
    const entidade = await entidadeRepository.findOne(entidadeId)
    if(!entidade){
      return res.status(401).json({Erro: "Entidade não encontrada"})
    }
    
    usuario.entidadesFavoritas.push(entidade)

    await usuariosRepository.save(usuario)

    return res.json(usuario)

  }
}