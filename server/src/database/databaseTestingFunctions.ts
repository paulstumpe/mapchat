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
} from "./Controllers"
const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const entityManager = getManager(); // you can also get it via getConnection().manager


setTimeout(() => {
  //make post and location
  // const post = new Posts();
  // const location = new Locations();
  // post.coordinate = location;
  // post.post_anonymous = false;
  // post.post_local = false;
  // post.post_public = false;
  // post.text = "post text";
  // post.time_expires = "unfinished feature";
  // post.title = "post title";
  // location.long = 0.0;
  // location.lat = 0.0;
  // createPost(post, location)
  // const comment = new Comments();
  // comment.text = "lolol";
  // //make comment
  // createComment(comment, 1).then(x=>console.log(x)).catch(x=>console.error(x))
  // const user = new Users();
  // user.bio = "bio"
  // user.email = "email";
  // user.name_first = "paul"
  // user.name_last = "Stumpe"
  // user.password = 'lala'
  // user.public = true;
  // user.status = "status";
  // user.username = 'jerkey2';
  // createUser(user);
  // removeLike(1,1).then(x=>console.log(x)).catch(x=>console.log(x))
  getAllPosts().then((posts: any) => console.log(posts[0]));

  // addLike(1, 1).then(x=>console.log(x)).catch(x=>{console.log(x)})
  // addLike(1, 2).then(x => console.log(x)).catch(x => { console.log(x) })
  // addLike(1, 3).then(x => console.log(x)).catch(x => { console.log(x) })
}, 300);