import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContratoEntity {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column({ length: 256 })
  public readonly descricao: string;

  @Column()
  public readonly inicio: Date;

  @Column()
  public readonly fim: Date;
}
