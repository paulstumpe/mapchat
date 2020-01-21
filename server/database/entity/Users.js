const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Users = require("../model/Users").Users; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: "Users",
  target: Users,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "true",
    },
  }
});

/*export */ class Users {
  constructor(id, id_Photos, username, name_first, name_last, password, email, status, bio, profile_public, time_created) {
    this.id = id;
    id_Photos
    this.username =username
    this.name_first =name_first
    this.name_last =name_last
    this.password =password
    this.email =email
    this.status =status
    this.bio =bio
    this.profile_public =profile_public
    
  }
}

module.exports = {
  Users: Users
};
