import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Locations} from "./Locations";
import { Comments} from "./Comments";

@Entity()
export class Posts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  post_public: boolean;

  @Column()
  post_local: boolean;

  @CreateDateColumn()
  time_created: Date;
  
  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  time_expires: string;
  
  @Column()
  post_anonymous: boolean;

  @ManyToOne(type => Locations, (locations:Locations)=> locations, {
    eager: true
  },)
  coordinate: Locations;

  @OneToMany(() => Comments, (post: Comments) => post.post, {
    eager:true
  })
  public comments: Comments[];

}
