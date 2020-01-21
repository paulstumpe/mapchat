/*export */ class Group {
  constructor(id, id_photos, description) {
    this.id = id;
    this.id_photos = id_photos;
    this.description = description;
  }
}

module.exports = {
  Group: Group
};