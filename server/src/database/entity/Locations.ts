import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Posts } from "./Posts";

@Entity()
export class Locations {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: string;

  @Column()
  long: string;

  @OneToMany(() => Posts, (post: Posts) => post.coordinate)
  public posts: Posts[];

}
