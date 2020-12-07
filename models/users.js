const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        //required: "Name is required"
    },
    password: {
        type: String,
        required: true
        //validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        required: "An email is required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    date: {
        type: Date,
        default: Date.now
      }
    /*city: {
        type: String
    },
    state: {
        type: String,
        required: true
    }
*/

});


const User = mongoose.model("users", userSchema)

module.exports = User;