/*export */ class Moderators {
  constructor(id, id_Users, id_Groups) {
    this.id = id;
    this.id_Users = id_Users;
    this.id_Groups = id_Groups
  }
}

module.exports = {
  Moderators: Moderators
};
