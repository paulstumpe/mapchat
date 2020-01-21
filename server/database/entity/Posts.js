const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Posts = require("../model/Posts").Posts; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
name:"Posts",
  target: Posts,
  columns:{
    id:{
      primary:true,
      type:"int",
      generated:"true",
    },
  }
});

/*export */ class Posts {
  constructor(id, id_Business, id_Interests, id_Locations, id_Users,Id_Groups,id_Photos, title, text, post_public, post_local, time_created, time_expires, post_anonymous) {
    this.id = id;
    this.id_Business = id_Business;
    this.id_Interests = id_Interests;
    this.id_Locations = id_Locations;
    this.id_Users = id_Users;
    this.Id_Groups = Id_Groups;
    this.id_Photos = id_Photos;
    this.title = title;
    this.text = text;
    this.post_public = post_public;
    this.post_local = post_local;
    this.time_created = time_created;
    this.time_expires = time_expires;
    this.post_anonymous = post_anonymous;
    
  }
}

module.exports = {
  Posts: Posts
};
