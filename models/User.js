
const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const User = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."
        ]
    },
    phonenumber: {
        type: String,
        required: true
    },
    email: {
        type: string,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    city: {
        type: string
    },
    state: {
        type: string,
        required: true
    }


});


const User = mongoose.model("User", User)

module.exports = User;