/*export */ class Likes {
  constructor(id, id_Posts, id_Users) {
    this.id = id;
    this.id_Posts = id_Posts;
    this.id_Users = id_Users;
  }
}

module.exports = {
  Likes: Likes
};
