import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Posts } from "./Posts";
import { Users} from "./Users";

@Entity()
export class Likes {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  time_created: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(type => Posts, (posts: Posts) => posts, {
  })
  post: Posts;

  @ManyToOne(type => Users, (users: Users) => users, {
    eager: true
  })
  user: Users;

}
// const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
// const Likes = require("../model/Likes").Likes; // import {Post} from "../model/Post";

// module.exports = new EntitySchema({
//   name: "Likes",
//   target: Likes,
//   columns: {
//     id: {
//       primary: true,
//       type: "int",
//       generated: "true",
//     },
//   }
// });

// /*export */ class Likes {
//   constructor(id, id_Posts, id_Users) {
//     this.id = id;
//     this.id_Posts = id_Posts;
//     this.id_Users = id_Users;
//   }
// }

// module.exports = {
//   Likes: Likes
// };
