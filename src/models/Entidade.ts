import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'

import Categoria from './Categorias'

@Entity('entidades')
export default class Entidade {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  endereco: string

  @Column()
  cep: number

  @Column()
  estado: string

  @Column()
  cidade: string

  @Column()
  numeroCasa: string

  @Column()
  complemento: string
  
  @Column()
  descricao: string
  
  @Column("varchar", {array: true})
  emails: string[]

  @Column("varchar", {array: true})
  telefones: string[]

  @Column()
  mantenedor: string

  @ManyToMany(type => Categoria, categoria => categoria.entidades)
  @JoinTable()
  categorias: Categoria[]

  @Column()
  isPessoa: boolean
}