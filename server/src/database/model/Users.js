/*export */ class Users {
  constructor(id, id_Photos, username, name_first, name_last, password, email, status, bio, profile_public, time_created) {
    this.id = id;
    id_Photos
    this.username =username
    this.name_first =name_first
    this.name_last =name_last
    this.password =password
    this.email =email
    this.status =status
    this.bio =bio
    this.profile_public =profile_public
    
  }
}

module.exports = {
  Users: Users
};
