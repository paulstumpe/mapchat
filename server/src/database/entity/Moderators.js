const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Moderators = require("../model/Moderators").Moderators; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Moderators",
  target: Moderators,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Moderators {
  constructor(id, id_Users, id_Groups) {
    this.id = id;
    this.id_Users = id_Users;
    this.id_Groups = id_Groups
  }
}

module.exports = {
  Moderators: Moderators
};
