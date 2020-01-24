const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Likes = require("../model/Likes").Likes; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Likes",
  target: Likes,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Likes {
  constructor(id, id_Posts, id_Users) {
    this.id = id;
    this.id_Posts = id_Posts;
    this.id_Users = id_Users;
  }
}

module.exports = {
  Likes: Likes
};
