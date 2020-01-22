/*export */ class Photos {
  constructor(id, large, medium, small, thumbnail) {
    this.id = id;
    this.large= large;
    this.medium = medium;
    this.small = small;
    this.thumbnail = thumbnail;
  }
}

module.exports = {
  Photos: Photos
};
