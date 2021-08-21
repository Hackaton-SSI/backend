import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import Acao from './Acao'
import Entidade from './Entidade'

@Entity('usuario')
export default class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  email: string

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
  imagem: string

  @ManyToMany(type => Acao, acoes => acoes.favoritados)
  @JoinTable()
  acoesFavoritas: Acao[]

  @ManyToMany(type => Entidade, entidades => entidades.favoritos)
  @JoinTable()
  entidadesFavoritas: Entidade[]
}