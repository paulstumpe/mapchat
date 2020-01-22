const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Friends = require("../model/Friends").Friends; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Friends",
  target: Friends,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Friends {
  constructor(id, id_Users_1, id_Users_2) {
    this.id = id;
    this.id_Users_1 = id_Users_1;
    this.id_Users_2 = id_Users_2;
  }
}

module.exports = {
  Friends: Friends
};