import "reflect-metadata";
import { getManager, EntityManager, Between } from "typeorm";
import { Locations } from "./entity/Locations";
import { Posts} from "./entity/Posts";
import { Comments} from "./entity/Comments";
import { Likes } from "./entity/Likes";
import { Users } from "./entity/Users";
// import { Friends } from "./entity/Friends";
import { userInfo, arch } from "os";
const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const entityManager = getManager(); // you can also get it via getConnection().manager

const createPost = (postValues:object, locationValues:object, userValues:object)=>{
  let post = new Posts();
  let user = new Users();
  Object.assign(user, userValues);
  Object.assign(post, postValues);
  post.user = user;
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
        return x;
      })
      .catch(x => {
        console.log(x, 'error on making post, createPost Else statement controller.ts');
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
    .catch(x => console.log(x, "getAllPosts Catch controllers.ts"))
}

const getAllPostsInRadius = (location:Locations, radius:number)=>{
  let minLong = location.long - radius;
  let maxLong = location.long + radius;
  let minLat = location.lat - radius;
  let maxLat = location.lat + radius;
    return entityManager
    .createQueryBuilder()
    .leftJoinAndSelect("posts.coordinate","coordinate")
    .getMany();
}
const createComment = (commentValues:any, postId:(number), userId:(number))=>{
  let comment = new Comments();
  console.log(commentValues, "createComment controolers.ts")
  Object.assign(comment, commentValues);
  let post = new Posts()
  let userL = new Users();
  return getPost({id:postId})
  .then((post:any)=>{
    comment.post = post;
    // return entityManager.save(Comments, comment);
    return getUser({id:userId})
  })
  .then((user:any)=>{
    // comment.user = user;
    userL.id = userId;
    comment.user = userL
    console.log(userL, "createComment then statement controllers.ts")
    return entityManager.save(comment);
  })

}
//adds like from user to post
const addLike = (userId:number, postId:number)=>{
  const like = new Likes();
  const post = new Posts()
  const user = new Users();
  user.id = userId
  post.id = postId;
  like.post = post;
  like.user = user;
  return entityManager.save(Likes, like)
}
const removeLike = (userId: number, postId: number) => {
  const like = new Likes();
  const post = new Posts()
  const user = new Users();
  user.id = userId
  post.id = postId;
  like.post = post;
  like.user = user;
  return entityManager.findOne(Likes, like).then(like=>{
    return entityManager.remove(like);
  })
}

const createUser = (userValues:any)=>{
  let user = new Users();
  Object.assign(user,userValues);
  return entityManager.save(Users, user);
}

const getUser = (userValues: any) => {
  let user = new Users();
  Object.assign(user, userValues);
  return entityManager.findOneOrFail(Users, user);
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
  .then(x=>console.log(x, "getLocation controllers.ts"))
}

const createFriendship = async ()=>{

  const manager = getManager();

  const a1 = new Users();
  a1.name_first = "a1";
  a1.bio = "";
  a1.name_last = "";
  a1.email = "";
  a1.password = "";
  a1.public = false;
  a1.status = "";
  a1.username = "";

  await manager.save(a1);

  const a11 = new Users();
  a11.name_first = "a11";
  a11.parentFriend = a1;
  a11.bio = "";
  a11.name_last = "";
  a11.email = "";
  a11.password = "";
  a11.public = false;
  a11.status = "";
  a11.username = "";

  await manager.save(a11);

  const a12 = new Users();
  a12.name_first = "a12";
  a12.parentFriend = a1;
  a12.bio = "";
  a12.name_last = "";
  a12.email = "";
  a12.password = "";
  a12.public = false;
  a12.status = "";
  a12.username = "";

  await manager.save(a12);

  const a111 = new Users();
  a111.name_first = "a111";
  a111.parentFriend = a11;
  a111.bio = "";
  a111.name_last = "";
  a111.email = "";
  a111.password = "";
  a111.public = false;
  a111.status = "";
  a111.username = "";

  await manager.save(a111);

  const a112 = new Users();
  a112.name_first = "a112";
  a112.parentFriend = a11;
  a112.bio = "";
  a112.name_last = "";
  a112.email = "";
  a112.password = "";
  a112.public = false;
  a112.status = "";
  a112.username = "";

  return await manager.save(a112);
  


}
const getFriends = async ()=>{
  const manager = getManager();
  // const trees = await manager.getTreeRepository(Users).findTrees();
  const a1 = new Users();
  a1.name_first = "a1";
  const users = await manager.getRepository(Users).find({ relations: ["myFriends"], where: { id: 5}  })

  return users;
}

export {
  getLocation,
  createLocationOrFindLocation,
  getAllPosts,
  getPost,
  createPost,
  addLike,
  removeLike,
  createUser,
  createComment,
  getUser,
  createFriendship,
  getFriends
}