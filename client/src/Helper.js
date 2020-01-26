import * as axios from 'axios';
const localIP = "172.24.12.151"
export let getAll = ()=>{
  return axios.get(`http://${localIP}:8080/messages/all`)
}
export const getOne = (postProperties)=>{
  return axios.get(`http://${localIP}:8080/messages`)
}
export const postMessageHelper = (postInput, location)=>{
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
      lat: location.latitude
    }
  };
  return axios.post(`http://${localIP}:8080/messages`,body)
  
}