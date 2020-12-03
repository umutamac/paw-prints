const router = require("express").Router();
//const db = require("../../models");
const fs = require('fs') // bring in fs to delete file when finished
const postController = require("../../controllers/postController");
require('dotenv').config();

//import multer and create a folder "uploads" to hold on to temp files
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

///import cloudinary and configure to your bucket access
const cloudinary = require('cloudinary').v2;
cloudinary.config({ // look at env for cloudinary config variables
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  
});

router.route("/allposts")
  .get(postController.findAll)
  .post(postController.create);

router.route("/:id")
  .get(postController.findById)
  .delete(postController.remove);
// .put(postController.update)


///// When the form is submitted and /imgup is hit:
// use multer upload method to organize file data to readable format
router.post("/imgup", upload.single('file'), function (req, res, next) {
  // the req.body has the text inputs, and req.file has the image file

  let textResponse = req.body // save text portion of response in a variable
  console.log(textResponse)

  //////use cloudinary uploader to send file to bucket and upload response
  cloudinary.uploader.upload(req.file.path, { tags: 'express_sample' })
    .then(function (cloudRes) {
      console.log('** file uploaded to Cloudinary service');
      console.dir(cloudRes); // log the response from cloudianry

      ////save the file path to temp folder and delete file
      console.log(req.file.path + "\n^^^^^^^^^^^^^^")
      fs.unlink(req.file.path, err => { if (err) { console.log(err) } })

      // add url of the cloudianry response from into the text portion of form response
      textResponse["imageURL"] = cloudRes.url
      console.log(textResponse)

      // create an entry to db with form response
      let result = postController.create(textResponse) 
      res.json(result); // send this to front end
    })

})

module.exports = router;