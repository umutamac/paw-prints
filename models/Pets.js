const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petsSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  imageURL: {
    required: true,
    type: String
  },
  pettype: {
    type: String
  },
  age: {
    type: Number
  },
  breed: {
    type: String
  },
  genre: {
    type: String
  },
  color: {
    type: String,
    required: true
  },
  date_lost: {
    type: Date
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: true
  },
  weight: {
    type: Number
  },
  contact: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]

});


const Pets = mongoose.model("Pets", petsSchema)

module.exports = Pets;

