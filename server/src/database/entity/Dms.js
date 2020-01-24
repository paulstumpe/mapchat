const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Dms = require("../model/Dms").Dms; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Dms",
  target: Dms,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Dms {
  constructor(id, id_users_to, text, id_Users_from, time_created) {
    this.id = id;
    this.id_users_to = id_users_to;
    this.text = text;
    this.id_Users_from = id_Users_from;
    this.time_created = time_created;
  }
}

module.exports = {
  Dms: Dms
};
