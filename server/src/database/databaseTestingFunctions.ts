import "reflect-metadata";
import { getManager, EntityManager, Between } from "typeorm";
import { Locations } from "./entity/Locations";
import { Posts} from "./entity/Posts";
import { Comments} from "./entity/Comments";
import { Likes } from "./entity/Likes";
import { Users } from "./entity/Users";
import {
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
} from "./Controllers"
const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const entityManager = getManager(); // you can also get it via getConnection().manager


setTimeout(() => {
  // make post and location
  // const post = new Posts();
  // const location = new Locations();
  // post.coordinate = location;
  // post.post_anonymous = false;
  // post.post_local = true;
  // post.post_public = false;
  // post.text = "Come checkout this statue";
  // post.time_expires = "unfinished feature";
  // post.title = "What a place!";
  // location.long = 0.0;
  // location.lat = 0.0;
  // createPost(post, location, {id:1})
  // const comment = new Comments();
  // comment.text = "lolol";
  // //make comment
  // const user = new Users();
  // user.bio = "bio"
  // user.email = "email";
  // user.name_first = "paul"
  // user.name_last = "Stumpe"
  // user.password = 'lala'
  // user.public = true;
  // user.status = "status";
  // user.username = 'jerkey4';
  // createUser(user);
  // getUser(user).then(data=>{console.log(data)}).catch(data=>{console.log(data)})
  // getUser(user)
  //   .catch(() => { return createUser(user) })
  //   .then(user => {
  //     console.log(user)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // createComment(comment, 1,1).then().catch(x=>console.error(x))
  // removeLike(1,1).then(x=>console.log(x)).catch(x=>console.log(x))
  // getAllPosts().then((posts: any) => console.log(posts.map((post:any)=>{return ['comment' + post.comments[0].text, 'post'+post.text]})));
  // createFriendship().then(x => { console.log(x) }).catch(x => console.log(x))
  getFriends().then((x:any)=>{console.log(x[0].myFriends)}).catch(x=>console.log(x.myFriends))

  // addLike(1, 1).then(x=>console.log(x)).catch(x=>{console.log(x)})
  // addLike(1, 2).then(x => console.log(x)).catch(x => { console.log(x) })
  // addLike(1, 3).then(x => console.log(x)).catch(x => { console.log(x) })

  
}, 300);