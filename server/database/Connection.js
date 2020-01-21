const typeorm = require("typeorm"); // import * as typeorm from "typeorm";

const {Connection, getConnection, getManager, getRepository} = typeorm;
const Post = require('./entity/PostSchema')
const connection = getConnection();
// console.log(connection)
setTimeout(()=>{
  const postRepository = connection.getRepository("Post");
  let post = {};
  post.title = 'paul'
  post.text = 'this worked'
  postRepository.save(post).then(suc=>console.log(suc)).catch(err=>console.log(err))
  postRepository.find({ order: { id: "DESC" }, select: ['title', 'id'], where: [{ id: 1 }, { id: 2 }, { title:"paul"}]}).then((x) => {
    console.log(x);
  })
},2000)
