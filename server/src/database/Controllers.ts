import "reflect-metadata";
import { getManager, EntityManager, Between } from "typeorm";
import { Locations } from "./entity/Locations";
import { Posts} from "./entity/Posts";
const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const entityManager = getManager(); // you can also get it via getConnection().manager

// console.log(connection)
const createPost = (postValues:object, locationValues:object)=>{
  let post = new Posts();
  Object.assign(post, postValues)
  if(locationValues){
    let location = new Locations();
    Object.assign(location, locationValues);
    post.coordinate = location;
    return createLocationOrFindLocation(location)
      .then(loc => {
        post.coordinate = loc;
        return entityManager.save(Posts, post)
      })
      .catch()
  } else {
    return entityManager.save(Posts, post)
      .then(x=>{
        console.log('succesfully saved post')
        return x;
      })
      .catch(x => {
        console.log('error on making post');
      })
  }
}


const getPost = (postValues:object)=>{
  const post = new Posts();
  Object.assign(post, postValues)
  return entityManager.findOne(Posts, post)
}
const getAllPosts = ()=>{
  return entityManager.find(Posts, { relations: ["coordinate"] })
// .then(allPosts=>console.log(allPosts))
.catch(x=>console.log(x))
}

const getAllPostsInRadius = (location:Locations, radius:number)=>{
  let minLong = location.long - radius;
  let maxLong = location.long + radius;
  let minLat = location.lat - radius;
  let maxLat = location.lat + radius;
    return entityManager
    .createQueryBuilder()
    .leftJoinAndSelect("posts.coordinate","coordinate")
    // .from(Locations, "locations")
    // .where("location.lat = :lat", { lat: location.lat })
    // .andWhere("location.long = :long", { long: location.long})
    .getMany();
  // return entityManager.find(Locations, {
  //   join: {
  //     alias: "post",
  //     leftJoinAndSelect: {
  //       video: "post.title"
  //     }
  //   },    
  //   long: Between(minLong, maxLong),
  //   lat: Between(minLat, maxLat),
  // })
}

const createLocationOrFindLocation = (locationValues:any)=>{
  const location = new Locations();
  Object.assign(location, locationValues)
  const entityManager = getManager(); // you can also get it via getConnection().manager
  return entityManager.findOne(Locations, location)
  .then((locationFound:any)=>{
    if(locationFound){
      return locationFound
    } else{
      return entityManager.save(Locations, location)
    }
  })
}

const getLocation = (locationValues:any)=>{
  const location = new Locations();
  Object.assign(location, locationValues);
  const entityManager = getManager();
  return entityManager.findOne(Locations, location)
  .then(x=>console.log(x, "HEREEEEEEEEEE"))
}

setTimeout(()=>{

  // const post = new Posts()
  // post.title = "hmm"
  // post.text = "hmm"
  // post.post_public = false;
  // post.post_local = false;
  // post.time_expires = "da"
  // post.post_anonymous = false;

  // let location = new Locations();
  // location.long = 20
  // location.lat = -100
  // createPost(post, location)

  // getPost({post: { long: 'new', lat: 'haa' },});
  // let newLocation = new Locations();
  // location.long
  // // getLocation(newLocation);
  // getAllPosts();
  // getAllPostsInRadius(location, 200)
  // .then(x=>console.log(x));

  
}, 300);
export {getLocation, createLocationOrFindLocation, getAllPosts, getPost, createPost}