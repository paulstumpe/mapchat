const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Photos = require("../model/Photos").Photos; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Photos",
  target: Photos,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Photos {
  constructor(id, large, medium, small, thumbnail) {
    this.id = id;
    this.large= large;
    this.medium = medium;
    this.small = small;
    this.thumbnail = thumbnail;
  }
}

module.exports = {
  Photos: Photos
};
