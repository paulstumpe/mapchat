const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Business = require("../model/Business").Business; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name:"Business",
  target: Business,
  columns:{
    id:{
      primary:true,
      type:"int",
      generated:"true",
    },
  }
});


/*export */ class Business {
  constructor(id, name, yelpReview, description, id_locations) {
    this.id = id;
    this.name = name;
    this.yelpReview = yelpReview;
    this.description = description;
    this.id_locations = id_locations;
  }
}

module.exports = {
  Bus: Bus
};
