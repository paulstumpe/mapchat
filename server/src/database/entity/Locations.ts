import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Posts } from "./Posts";

@Entity()
export class Locations {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: number;

  @Column()
  long: number;

  @OneToMany(() => Posts, (post: Posts) => post.coordinate)
  public posts: Posts[];

}
