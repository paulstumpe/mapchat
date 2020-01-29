import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class Photos {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  small: string;

  @Column()
  medium: string;

  @Column()
  large: string;

  @Column()
  thumbnail: string;

}

