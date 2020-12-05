const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Pets
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
        console.log(err)
      });
  },
  findById: function (id) {
    db.Pets
      .findById(id, function (err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Result : ", doc);
          return JSON.stringify(doc);
        }
      })
  },
  create: function (data) {
    db.Pets
      .create(data)
      .then(dbModel => {
        console.log("***********\n" + JSON.stringify(dbModel))
        return dbModel
      })
    // .catch(err => {
    //   return status(422).json(err) });
  },
  // update: function(req, res) {
  //   db.Pets
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function (id) {
    db.Pets
    .findByIdAndDelete(id, function (err) {
      if(err) console.log(err);
      //console.log("Successful deletion");
    })
  }
};

