import { 
  Column, 
  Entity, 
  JoinTable, 
  ManyToMany, 
  PrimaryGeneratedColumn 
} from 'typeorm'

import Categorias from './Categorias'
import Usuario from './Usuarios'

@Entity('acao')
export default class Acao {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  endereco: string

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  descricao: string

  @Column()
  data: Date

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date

  @ManyToMany(type => Categorias, categoria => categoria.acoes)
  @JoinTable()
  categorias: Categorias[]

  @ManyToMany(type => Usuario, usuarios => usuarios.acoesFavoritas)
  favoritados: Usuario[]
}