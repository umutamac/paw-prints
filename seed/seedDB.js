const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pawprint"
);

const petsSeed = [
  {
    name: "Rocky",
    imageURL: "https://res.cloudinary.com/umutcloud/image/upload/v1606763726/paw-prints/masked_cat.jpg",
    pettype: "cat",
    age: 2,
    breed: "Siamese",
    genre: "Female",
    color: "white and black",
    date_lost: "11/22/2020",
    location: "north Austin",
    status: "true",
    weight: 2,
    contact: 1

  },
  {
    name: "Lukas",
    imageURL: "https://res.cloudinary.com/umutcloud/image/upload/v1606763800/paw-prints/brian_griffin.jpg",
    pettype: "dog",
    age: 1,
    breed: "lab",
    genre: "Male",
    color: "brown",
    date_lost: "11/23/2020",
    location: "street blue",
    status: "true",
    weight: 150,
    contact: 2

  },
  {
    name: "Mimi",
    pettype: "dog",
    age: 5,
    breed: "",
    genre: "Female",
    color: "yellow",
    image: "",
    date_lost: "11/25/2020",
    location: "south",
    status: "true",
    weight: 25,
    contact: 3

  }
];

const UserSeed = [
  {
    name: "Mario",
    password: "123",
    phonenumber: "512-532-9561",
    email: "mario@gmail.com",
    city: "Austin",
    state: "Texas",

  },
  {
    name: "Carlos",
    password: "1235",
    phonenumber: "512-895-2564",
    email: "carlos@gmail.com",
    city: "Austin",
    state: "Texas",

  },
  {
    name: "Eric",
    password: "45462",
    phonenumber: "512-598-4455",
    email: "eric@gmail.com",
    city: "Round Rock",
    state: "Texas",

  }

];



db.Pets.remove({})
  .then(() => db.Pet.collection.insertMany(petsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.Pet.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
