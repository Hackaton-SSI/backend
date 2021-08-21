import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}