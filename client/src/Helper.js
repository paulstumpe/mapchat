import * as axios from 'axios';
const localIP = '172.24.6.51';
export let getAll = () => {
  return axios.get(`http://${localIP}:8080/messages/all`);
};
export const getOne = postProperties => {
  return axios.get(`http://${localIP}:8080/messages`);
};
export const postMessageHelper = (postInput, location) => {
  console.log(location);
  let body = {
    title: postInput.title,
    text: postInput.message,
    // post_public,
    // post_local,
    // time_created,
    // updated_at,
    // time_expires,
    // post_anonymous,
    coordinate: {
      long: location.longitude,
      lat: location.latitude,
    },
  };
  return axios.post(`http://${localIP}:8080/messages`, body);
};


export const getUser = (userInput)=>{
  return axios.get(`http://${localIP}:8080/users`, userInput);
}
export const postUser = (userInput)=>{
  let body = {
    username: userInput.username,
    name_first: userInput.name_first,
    name_last: userInput.name_last,
    password: userInput.password,
    email: userInput.email,
    bio: userInput.bio,
    status: userInput.status,
    public: userInput.public,
  }
  return axios.post(`http://${localIP}:8080/users`, body);
}


export const postComment = (commentInput) => {
  const body = {
    postId:commentInput.postId, 
    text: commentInput.text, 
    userId: commentInput.userId
  }
  return axios.post(`http://${localIP}:8080/comments`, body);
}


export const addLike = (likeInput)=>{
  const body = {
    userId: likeInput.userId,
    postId: likeInput.postId
  }
  return axios.post(`http://${localIP}:8080/likes`, body);
}
export const removeLike = (likeInput)=>{
  const body = {
    userId: likeInput.userId,
    postId: likeInput.postId
  };
  return axios.delete(`http://${localIP}:8080/likes`, {data:body});
}