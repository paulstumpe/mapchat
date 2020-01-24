/*export */ class Threads {
  constructor(id, id_Photos, id_Groups, id_Users, text, time_created) {
    this.id = id;
    this.id_Photos = id_Photos;
    this.id_Groups = id_Groups;
    this.id_Users = id_Users;
    this.text = text;
    this.time_created = time_created;
    
  }
}

module.exports = {
  Threads: Threads
};
