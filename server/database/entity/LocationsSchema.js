const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Locations = require("../model/Locations").Locations; // import {Post} from "../model/Post";

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
