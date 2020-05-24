import axios from 'axios';

export default {
  createUser: function (user) {
    return axios.post('/auth/user', user).catch((err) => {
      throw err;
    });
  },
  authenticate: function (user) {
    return axios.post(`/auth/authenticate`, user).catch((err) => {
      throw err;
    });
  },
  checkToken: function () {
    return axios.get('/auth/checkToken').catch((err) => {
      throw err;
    });
  },
  logout: function () {
    return axios.get('/auth/logout').catch((err) => {
      throw err;
    });
  },
};
