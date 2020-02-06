import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Likes } from "./Likes";
import { Posts } from "./Posts";
import { Comments } from "./Comments";
// import { Friends} from "./Friends"

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name_first: string;

  @Column()
  name_last: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  bio: string;

  @Column()
  status: string;

  @Column()
  public: boolean;

  @CreateDateColumn()
  time_created: Date;

  @UpdateDateColumn()
  updated_at: Date;

  //@Column
  //photo : string //or something like this

  @OneToMany(() => Comments, (post: Comments) => post.post, {
  })
  public comments: Comments[];
  
  @OneToMany(() => Posts, (user: Posts) => user.user, {
  })
  public posts: Posts[];

  @ManyToOne(type => Users, user => user.myFriends)
  parentFriend: Users;

  @OneToMany(type => Users, user => user.parentFriend)
  myFriends: Users[];

}