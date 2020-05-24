const db = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Defining methods for the primary items controller
module.exports = {
  create: function (req, res) {
    const primary = req.body;

    db.Primary.create(primary)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
        console.log('ERROR: ' + err);
      });
  },
  getById: function (req, res) {
    db.Primary.findAll({
      where: {
        UserId: req.body.UserId,
      },
    }).then((dbPrimaries, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbPrimaries.filter((primary) => primary.id == req.params.id);
      res.json(dbPrimaries[0]);
    });
  },
  getAllByUserId: function (req, res) {
    db.Primary.findAll({
      where: {
        UserId: req.body.UserId,
      },
    }).then((dbPrimaries, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbPrimaries);
    });
  },
  updateById: function (req, res) {
    db.Primary.findAll({
      where: {
        UserId: req.body.UserId,
      },
    }).then((dbPrimaries, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbPrimaries.filter((primary) => primary.id == req.params.id);
      if (dbPrimaries[0]) {
        db.Primary.update(req.body, {
          where: {
            id: req.params.id,
          },
        })
          .then((newDbPrimary) => {
            if (newDbPrimary) {
              res.json(newDbPrimary);
            }
          })
          .catch((err) => res.json(err));
      }
    });
  },
};
