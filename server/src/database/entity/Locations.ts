import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
// import { Posts } from "./PostsSchema";

@Entity()
export class Locations {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: string;

  @Column()
  long: string;

  // @OneToMany(type => Posts)
  // @JoinColumn({ name: "cat_id" })
  // category: Category;
}
