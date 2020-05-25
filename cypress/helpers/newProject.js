module.exports = class Project {
  constructor() {
    this.name = this.getRandomString(8);
  }

  getRandomString(length) {
    return Math.random().toString(20).substr(2, length);
  }
};
