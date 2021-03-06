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
  createProject: function (project) {
    return axios.post('/api/projects', project).catch((err) => {
      throw err;
    });
  },
  createTest: function (test) {
    return axios.post('/api/tests', test).catch((err) => {
      throw err;
    });
  },
  getAllProjects: function () {
    return axios.get('/api/projects').catch((err) => {
      throw err;
    });
  },
  getProjectById: function (id) {
    return axios.get(`/api/projects/${id}`).catch((err) => {
      throw err;
    });
  },
  updateProject: function (project) {
    return axios.put(`/api/projects/${project.id}`, project).catch((err) => {
      throw err;
    });
  },
  deleteProject: function (id) {
    return axios.delete(`/api/projects/${id}`).catch((err) => {
      throw err;
    });
  },
  getAllTests: function (id) {
    return axios.get(`/api/projects/${id}/tests`).catch((err) => {
      throw err;
    });
  },
  getTestById: function (id) {
    return axios.get(`/api/tests/${id}`).catch((err) => {
      throw err;
    });
  },
  updateTest: function (test) {
    return axios.put(`/api/tests/${test.id}`, test).catch((err) => {
      throw err;
    });
  },
  deleteTest: function (id) {
    return axios.delete(`/api/tests/${id}`).catch((err) => {
      throw err;
    });
  },
};
