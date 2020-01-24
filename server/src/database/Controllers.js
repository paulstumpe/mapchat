// import { getManager } from "typeorm";
// import { Locations } from "./entity/Locations";
// import { Posts } from "./entity/PostsSchema";
// const typeorm = require("typeorm"); // import * as typeorm from "typeorm";

// // console.log(connection)
// setTimeout(() => {

//   const entityManager = getManager(); // you can also get it via getConnection().manager
//   entityManager.findOne(Locations, 1)
//     .then((location) => {
//       const post = new Posts();
//       post.title = "hmm"
//       post.text = "hmm"
//       post.post_public = false;
//       post.post_local = false;
//       post.time_created
//       post.time_expires = "da"
//       post.post_anonymous = false;
//       console.log(post);
//       console.log(location);
//       post.location = location;


//       return entityManager.save(Posts, post)
//     }).catch(x => {

//       console.log(x);
//     })
//     .then(x => {
//       console.log(x)
//     })

// }, 1)
