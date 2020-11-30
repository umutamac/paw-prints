const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    password: {
        type: String,
        required: "Password is required",
        validate: [({ length }) => length >= 6, "Password should be longer."
        ]
    },
    phonenumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: "An email is required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    city: {
        type: String
    },
    state: {
        type: String,
        required: true
    }


});


const User = mongoose.model("User", userSchema)

module.exports = User;