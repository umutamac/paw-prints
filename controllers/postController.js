const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Pets
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Pets
      .findById(req.params.id)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Pets
      .create(req.body)
      .then(dbModel => {
        console.log("***********\n"+JSON.stringify(dbModel))
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Pets
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function(req, res) {
    db.Pets
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

