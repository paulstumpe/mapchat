import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Posts } from "./Posts";

@Entity()
export class Locations {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "decimal",
    precision: 10, 
    scale: 8
  })
  lat: number;

  @Column({
    type: "decimal",
    precision: 11,
    scale: 8
  })
  long: number;

  @OneToMany(() => Posts, (post: Posts) => post.coordinate)
  public posts: Posts[];

}
