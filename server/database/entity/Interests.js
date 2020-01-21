const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Interests = require("../model/Interests").Interests; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Interests",
  target: Interests,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Interests {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

module.exports = {
  Interests: Interests
};
