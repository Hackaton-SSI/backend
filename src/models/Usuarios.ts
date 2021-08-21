import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

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
  latitude: number

  @Column()
  longitude: number

  @Column()
  complemento: string

  @Column()
  imagem: string
}