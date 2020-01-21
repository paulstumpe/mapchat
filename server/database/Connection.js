const typeorm = require("typeorm"); // import * as typeorm from "typeorm";

const {Connection, getConnection, getManager, getRepository} = typeorm;
const connection = getConnection();
// console.log(connection)
setTimeout(()=>{
  // const postRepository = connection.getRepository("Post");
  // let post = {};
  // post.title = 'paul'
  // post.text = 'this worked'
  // postRepository
  // .save(post)
  // .then(suc=>{
  //   // console.log(suc)
  // })
  // .catch(err=>{
  //   // console.log(err)
  // })
  // postRepository.find({ order: { id: "DESC" }, select: ['title', 'id'], where: [{ id: 1 }, { id: 2 }, { title:"paul"}]})
  // .then((x) => {
  //   // console.log(x);
  // })

  const locationsRepository = connection.getRepository("Locations");
  let location = {};
  location.long = 1;
  location.lat = 1;
  locationsRepository
    .save(location)
    .then(suc => {
      console.log(suc)
    })
    .catch(err => {
      console.log(err)
    })
  // postRepository.find({ order: { id: "DESC" }, select: ['title', 'id'], where: [{ id: 1 }, { id: 2 }, { title: "paul" }] })
  //   .then((x) => {
  //     // console.log(x);
  //   })
  

  const postsRepository = connection.getRepository("Posts");
  let post = {};
  post.title = 1;
  post.text = 1;
  post.time_expires = '1000-01-01 00:00:00';
  post.post_public = false;
  post.post_local = false;
  post.post_anonymous = false;
  post.location = [location];
  postsRepository
    .save(post)
    .then(suc => {
      console.log(suc)
    })
    .catch(err => {
      console.log(err)
    })
  postsRepository.find()
    .then((x) => {
      console.log(x);
    })
},2000)
