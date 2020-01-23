const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Locations = require("../model/Locations").Locations; // import {Post} from "../model/Post";
const Posts = require("../model/Posts").Posts; // import {Post} from "../model/Post";


module.exports = new EntitySchema({
  name: "Locations",
  target: Locations,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    lat:{
      type: "int"
    },
    long:{
      type:"int"
    },
  },
  relations:{
    Posts:{
      target:"Posts",
      type: "one-to-many",
      cascade: true,
      inverseSide: 'firstEntity',
      eager: true,
      nullable: false,
    }
  }
});

// /*export */ class Locations {
//   constructor(id, lat, long) {
//     this.id= id;
//     this.lat= lat;
//     this.long= long;
//   }
// }

// module.exports = {
//   Locations: Locations
// };
