const { Router } = require('express');
const apiRouter = Router();
import {
  getPost,
  getAllPosts,
  createPost,
  removeLike,
  addLike,
  createUser,
  getUser,
  createComment,
} from './database/Controllers';
require('./database/databaseTestingFunctions');

// apiRouter.get('/apple', (req, res) => {
//   console.log('hit')
// });
/*{
  GET to '/messages'
  params: required {location, username || userId}
  params: optional {radius, topics}
  Retruns: a body with an array of all messages in that radius.
    If topics were provided, it will  only return posts with those topics
  }
  */
apiRouter.get('/messages/all', (req, res) => {
  getAllPosts()
    .then(allPosts => {
      res.send(allPosts);
    })
    .catch(err => {
      console.log(err, 'Router Get Catch messages/all routs.js');
      res.status(400);
      res.send('error');
    });
});
apiRouter.get('/messages', (req, res) => {
  let post = {};
  for (let key in req.body) {
    post[key] = req.body[key];
  }
  getPost(post)
    .then(post => {
      console.log(post, 'get /messages routs.js');
      res.send(post);
    })
    .catch(err => {
      res.status(400);
      console.log(err, 'get /messages error');
      res.send('error');
    });
});

apiRouter.post('/messages', (req, res) => {
  const {
    title,
    text,
    post_public,
    post_local,
    time_created,
    updated_at,
    time_expires,
    post_anonymous,
    coordinate,
    userId,
  } = req.body;
  let user = { id: userId };
  let post = {
    title: title,
    text: text,
    post_public: post_public,
    post_local: post_local,
    // time_created,
    // updated_at,
    time_expires: 'unfinshed',
    post_anonymous: post_anonymous,
  };
  console.log('this is the text', req.body);
  console.log('this is coordinate', coordinate);
  createPost(post, coordinate, user)
    .then(post => {
      res.send(post);
    })
    .catch(err => {
      res.status(400);
      console.log(err, 'error catch in post /messages routes.js');
      res.send('error');
    });
});

apiRouter.get('/users', (req, res) => {
  let user = {};
  for (let key in req.body) {
    user[key] = req.body[key];
  }
  getUser(user)
    .then(user => {
      console.log(user, 'get /users routes.js');
      res.status = 200;
      res.send(user);
    })
    .catch(err => {
      console.log(err, 'err get /users routes.js');
      res.status = 404;
      res.send();
    });
});

apiRouter.post('/users', (req, res) => {
  console.log(req.body);
  let user = { email: req.body.email };
  getUser(user)
    .catch(err => {
      console.log(
        err,
        '\n get user failed, creating user instead post @ /users',
      );
      for (let key in req.body) {
        user[key] = req.body[key];
      }
      return createUser(user);
    })
    .then(user => {
      console.log(user, 'post /users routes.js');
      res.status = 200;
      res.send(user);
    })
    .catch(err => {
      console.log(err, 'err post /users routes.js');
      res.status = 404;
      res.send();
    });
});

apiRouter.patch('/users', (req, res) => {
  console.log(req.body, 'incoming patch /users routes.js');
  let user = {};
  user.id = req.body.id;
  getUser(user)
    .then(userToUpdate => {
      for (let key in req.body) {
        userToUpdate[key] = req.body[key];
      }
      return createUser(userToUpdate);
    })
    .then(userFinished => {
      console.log(userFinished, 'patch /users routes.js');
      res.status = 200;
      res.send(userFinished);
    })
    .catch(err => {
      console.log(err, 'err patch /users routes.js');
      res.status = 404;
      res.send();
    });
});

apiRouter.post('/likes', (req, res) => {
  const { userId, postId } = req.body;
  addLike(userId, postId)
    .then(like => {
      res.status = 200;
      res.send(like);
    })
    .catch(err => {
      console.log(err, 'err post likes routes.js');
      res.status = 404;
      res.send('there was an error adding this like');
    });
});
apiRouter.delete('/likes', (req, res) => {
  const { userId, postId } = req.body;
  removeLike(userId, postId)
    .then(like => {
      res.status = 200;
      res.send(like);
    })
    .catch(err => {
      console.log(err, 'delete /likes routes.js');
      res.status = 404;
      res.send('there was an error adding this like');
    });
});

apiRouter.post('/comments', (req, res) => {
  console.log(req.body, 'post /comments routes.js');
  const { postId, text, userId } = req.body;
  let comment = { text: text };
  createComment(comment, postId, userId)
    .then(comment => {
      res.status = 200;
      res.send(comment);
    })
    .catch(err => {
      console.log(err, 'err get /comments routes.js');
      res.status = 404;
      res.send();
    });
});

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
