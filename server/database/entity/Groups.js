const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Group = require("../model/Group").Group; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Group",
  target: Group,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Group {
  constructor(id, id_photos, description) {
    this.id = id;
    this.id_photos = id_photos;
    this.description = description;
  }
}

module.exports = {
  Group: Group
};