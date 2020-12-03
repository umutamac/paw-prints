const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petsSchema = new Schema({
  petname: {
    type: String,
    trim: true
  },
  petType: {
    type: String,
    trim: true
  },
  phoneNum: { 
    type: String,
  },
  details: { 
    type: String,
  },
  imageURL: {
    required: true,
    type: String
  },
  date_lost: { 
    type: Date
    //doesn't have a corresponding input in form
    // has ~90% browser support
  },
  contact: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

const Pets = mongoose.model("Pets", petsSchema)
module.exports = Pets;

