import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinTable, 
  ManyToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
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
  descricao: string

  @Column()
  data: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToMany(type => Categorias, categoria => categoria.acoes)
  @JoinTable()
  categorias: Categorias[]

  @ManyToMany(type => Usuario, usuarios => usuarios.acoesFavoritas)
  favoritados: Usuario[]
}