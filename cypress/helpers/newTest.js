module.exports = class Project {
  constructor() {
    this.subject = this.getRandomString(8);
    this.description = this.getRandomString(8);
  }

  getRandomString(length) {
    return Math.random().toString(20).substr(2, length);
  }
};
