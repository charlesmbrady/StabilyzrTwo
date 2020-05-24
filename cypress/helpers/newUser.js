module.exports = class User {
  constructor() {
    this.firstName = this.getRandomString(8);
    this.lastName = this.getRandomString(8);
    this.email = this.getRandomString(8);
    this.password = this.getRandomString(8);
    this.passwordConfirmation = this.password;
  }

  getRandomString(length) {
    return Math.random().toString(20).substr(2, length);
  }
};
