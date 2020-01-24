
import { getManager } from "typeorm";
import { Locations } from "./entity/Locations";
import { Posts} from "./entity/PostsSchema";
const typeorm = require("typeorm"); // import * as typeorm from "typeorm";

// console.log(connection)
const createPost = (postValues:any, location:any)=>{
  const {title, text, post_public, post_local, time_expires, post_anonymous} = postValues;
  const post = new Posts();
  const entityManager = getManager(); // you can also get it via getConnection().manager
  entityManager.findOne(Locations, location)
  .then((location:any)=>{
    post.title = title;
    post.text = text;
    post.post_public = post_public;
    post.post_local = post_local;
    post.time_expires = time_expires;
    post.post_anonymous = post_anonymous;
    post.location = location;
    return entityManager.save(Posts, post)
  }).catch(x=>{
    console.log(x, 'error on making post');
  })
  .then(x=>{
    console.log(x, 'succesfully saved post')
    return x;
  })
}
const createLocation = (locationValues:any)=>{
  const {long, lat} = locationValues;
  const location = new Locations();
  const entityManager = getManager(); // you can also get it via getConnection().manager
  location.long = long;
  location.lat = lat;
  return entityManager.save(Locations, location)
  .then(location=>{
    console.log(location, ' was saved');
  })
  .catch(err=>{
    console.log(err, 'error on createLocation')
  })
}

const post = new Posts()
post.title = "hmm"
post.text = "hmm"
post.post_public = false;
post.post_local = false;
post.time_expires = "da"
post.post_anonymous = false;
setTimeout(()=>{
  createLocation({long:'lol', lat:'worked'})
    .then(()=>createPost(post, new Locations()))
  
}, 300);
