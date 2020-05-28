const db = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Defining methods for the tests controller
module.exports = {
  create: function (req, res) {
    const test = req.body;

    db.Test.create(test)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
        console.log('ERROR: ' + err);
      });
  },
  getById: function (req, res) {
    db.Test.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbTest, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbTest);
    });
  },
  getAllByProjectId: function (req, res) {
    db.Test.findAll({
      where: {
        ProjectId: req.params.id,
      },
    }).then((dbTests, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbTests);
    });
  },
  updateById: function (req, res) {
    db.Test.findAll({
      where: {
        UserId: req.body.UserId,
      },
    }).then((dbTests, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbTests.filter((test) => test.id == req.params.id);
      if (dbTests[0]) {
        db.Test.update(req.body, {
          where: {
            id: req.params.id,
          },
        })
          .then((newDbTest) => {
            if (newDbTest) {
              res.json(newDbTest);
            }
          })
          .catch((err) => res.json(err));
      }
    });
  },
  deleteById: (req, res) => {
    db.Test.destroy({
      where: { id: req.params.id },
    })
      .then(() => {
        res.json(true);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
