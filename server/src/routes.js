const { Router } = require('express');
const apiRouter = Router();

apiRouter.get('/apple', (req, res) => {
  console.log('hit')
});
/*{
  GET to '/messages'
  params: required {location, username || userId}
  params: optional {radius, topics}
  Retruns: a body with an array of all messages in that radius.
    If topics were provided, it will  only return posts with those topics
  }
  */
apiRouter.get('/messages', (req, res)=>{
  const {location, username, userId, radius, topics} = req.params;
  console.log(location);

})
//endpoints we will need
//get: messages within x proximity of location

//get: messages within x promixity of location by interests
//get: tweets by location
//get: google places by location
//post: dropmessage at a location
//patch: alter message 
//get: own user profile
//get: other users profiles
//get: users groups
//get: groups members
//get: users friends
//get: users dms/converstaions
//get: messages from a conversation
//post: add a friend request
//get: users interests
//post: post a new user interst
//delete: remove a users interest
//get: a posts comments
//post: add a comment to a post
//post: make group
//post: add new group member
//patch: alter group bio




module.exports.apiRouter = apiRouter;
