import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import Entidade from './Entidade'

@Entity('categoria')
export default class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column()
  cor: string

  @Column()
  imagem: string

  @ManyToMany(type => Entidade, entidade => entidade.categorias)
  entidades: Entidade[]
}