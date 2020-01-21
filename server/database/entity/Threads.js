const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Threads = require("../model/Threads").Threads; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Threads",
  target: Threads,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Threads {
  constructor(id, id_Photos, id_Groups, id_Users, text, time_created) {
    this.id = id;
    this.id_Photos = id_Photos;
    this.id_Groups = id_Groups;
    this.id_Users = id_Users;
    this.text = text;
    this.time_created = time_created;
    
  }
}

module.exports = {
  Threads: Threads
};
