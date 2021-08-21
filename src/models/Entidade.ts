import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('entidades')
export default class Entidade {
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
  
  @Column("varchar", {array: true})
  emails: string[]

  @Column("varchar", {array: true})
  telefones: string[]

  @Column()
  mantenedor: string

  @Column("varchar", {array: true})
  categorias: string[]

  @Column()
  isPessoa: boolean
}