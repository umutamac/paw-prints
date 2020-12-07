const db = require("../models");
const fs = require('fs'); // bring in fs to delete file when finished

///import cloudinary and configure to your bucket access
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ // look at env for cloudinary config variables
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

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
  findById: function (req,res) {
    db.Pets
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
        console.log(err)
      });
  },
  create: function (req, res) {
    // the req.body has the text inputs, and req.file has the image file
    let textPortion = req.body // save text portion of response in a variable

    //////use cloudinary uploader to send file to bucket and upload response
    cloudinary.uploader.upload(req.file.path, { tags: 'express_sample' })
      .then(function (cloudRes) {
        console.log('** file uploaded to Cloudinary service');
        console.dir(cloudRes); // log the response from cloudianry

        ////save the file path to temp folder and delete file
        console.log(req.file.path + "\n^^^^^^^^^^^^^^")
        fs.unlink(req.file.path, err => { if (err) { console.log(err) } })

        // add url of the cloudianry response from into the text portion of form response
        textPortion["imageURL"] = cloudRes.url; // to later retrieve and display images
        textPortion["imgPublicID"] = cloudRes.public_id; // to later delete pics from cloudinary  

        // create an entry to db with form response
        db.Pets.create(textPortion)
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
  },
  remove: function (req, res) {
    console.log("1----------> post ID: " + req.params.id)
    let mainID = req.params.id;
    let imgIDToRemove;
    db.Pets.findById(mainID)
      .then(function (document) { // "document" is the post we found by id
        console.log("2------> dbModel:")
        console.log(document);

        imgIDToRemove = document.imgPublicID // extract imgPublicID
        console.log("3----->imgPublicID to be removed: " + imgIDToRemove);
        console.log("4-----> mainID: " + mainID)

        // use imgPublicID to delete pic in Cloud
        cloudinary.uploader.destroy(imgIDToRemove, () => {
          console.log("6---->Cloudinary delete is running");
        }).then(cloudResult => {
          console.log("6---->Cloudinary delete is done");
          console.log(cloudResult);
          res.json(cloudResult);
        })

        // delete document from db
        db.Pets.findByIdAndDelete(mainID)
          .then(deleteResult => {
            console.log("5-----> Post deleted");
            res.json(deleteResult)
          }).catch(err => console.log(err))

      })
  },
  findMany: function (req, res) { 
    let thing = req.params.id;
    db.Pets.find( {userID: thing} )
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
        console.log(err)
      });
  }
  // update: function(req, res) {
  //   db.Pets
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
};

