//must add to db/index.js connection
const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Users = require("../model/Post").Post; // import {Post} from "../model/Post";
const Category = require("../model/Category").Category; // import {Category} from "../model/Category";

module.exports = new EntitySchema({
  name: "Users",
  target: Users,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    // username: {
    //   type: "varchar"
    // },
    // name_first: {
    //   type: "varchar"
    // },
    // name_last: {
    //   type: "varchar"
    // },
    // password:{
    //   length: 20,
    //   type:"varchar"
    // },
    // status:{
    //   type:"varchar"
    // },
    // bio: {
    //   type: "varchar"
    // },
    // profile_public: {
    //   type: "bit"
    // },
    CreateDateColumn: {
      name: "time_created",
      CreateDateColumn: true,
      type: "timestamp",
    },
  },
  // relations: {
  //   categories: {
  //     target: "Category",
  //     type: "many-to-many",
  //     joinTable: true,
  //     cascade: true
  //   }
  // }
});
