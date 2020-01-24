/*export */ class Dms {
  constructor(id, id_users_to, text, id_Users_from, time_created) {
    this.id = id;
    this.id_users_to = id_users_to;
    this.text = text;
    this.id_Users_from = id_Users_from;
    this.time_created = time_created;
  }
}

module.exports = {
  Dms: Dms
};
