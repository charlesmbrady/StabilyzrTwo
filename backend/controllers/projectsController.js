const db = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Defining methods for the projects controller
module.exports = {
  create: function (req, res) {
    const project = req.body;

    db.Project.create(project)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
        console.log('ERROR: ' + err);
      });
  },
  getById: function (req, res) {
    db.Project.findAll({
      where: {
        UserId: req.body.UserId,
      },
    }).then((dbProjects, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbProjects.filter((project) => project.id == req.params.id);
      res.json(dbProjects[0]);
    });
  },
  getAllByUserId: function (req, res) {
    db.Project.findAll({
      where: {
        UserId: req.body.UserId,
      },
    }).then((dbProjects, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbProjects);
    });
  },
  updateById: function (req, res) {
    db.Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((newDbProject) => {
        if (newDbProject) {
          res.json(newDbProject);
        }
      })
      .catch((err) => res.json(err));
  },
  deleteById: (req, res) => {
    db.Project.destroy({
      where: { id: req.params.id },
    })
      .then(() => {
        res.json(true);
      })
      .catch(() => {
        res.json(false);
      });
  },
};
