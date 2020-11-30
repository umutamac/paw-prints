
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const Pets = new Schema({
  name: {
    type: String,
    trim: true
  },
  pettype: {
    type: string
  },
  age: {
    type: Number
  },
  breed: {
    type: String
  },
  genre: {
    type: string
  },
  color: {
    type: string,
    required: true
  },
  image: {
    type: string
  },
  date_lost: {
    type: Date
  },
  location: {
    type: string,
    required: true
  },
  status: {
    type: string,
    default: true
  },
  weight: {
    type: number
  },
  contact: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]

});


const Pets = mongoose.model("Pets", Pets)

module.exports = Pets;

