/*export */ class Comments {
  constructor(id, id_Posts, id_Users, text, time_created) {
    this.id = id;
    this.id_Posts = id_Posts;
    this.id_Users = id_Users;
    this.text = text;
    this.time_created = time_created;

  }
}

module.exports = {
  Comments: Comments
};
