const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pawprint"
);

const petsSeed = [
  {
    petname: "Rocky",
    petType: "Cat",
    petColor: "White and black",
    petBreed: "maine coon",
    phoneNum: "8148628666",
    details: "This is important details about my lost cat",
    imageURL: "https://res.cloudinary.com/umutcloud/image/upload/v1606763726/paw-prints/masked_cat.jpg",
    date_lost: "11/23/2020",
    status: "true",
    contact: 1
  },
  {
    petname: "Lukas",
    petType: "Dog",
    petColor: "Brown",
    petBreed: "Labrador",
    phoneNum: "8148628666",
    details: "This is important details about my lost cat",
    imageURL: "https://res.cloudinary.com/umutcloud/image/upload/v1606763800/paw-prints/brian_griffin.jpg",
    date_lost: "11/23/2020",
    status: "true",
    contact: 2
  },
  {
    petname: "Mimi",
    petType: "dog",
    petColor: "yellow",
    petBreed: "Chihuahua",
    phoneNum: "8148628666",
    details: "This is important details about my lost cat",
    imageURL: "https://res.cloudinary.com/umutcloud/image/upload/v1606763800/paw-prints/brian_griffin.jpg",
    date_lost: "11/25/2020",
    status: "true",
    contact: 3
  }
];

const UserSeed = [
  {
    name: "Mario",
    password: "abcdef",
    phonenumber: "512-532-9561",
    email: "mario@gmail.com",
    city: "Austin",
    state: "Texas",

  },
  {
    name: "Carlos",
    password: "password123",
    phonenumber: "512-895-2564",
    email: "carlos@gmail.com",
    city: "Austin",
    state: "Texas",

  },
  {
    name: "Eric",
    password: "asdfgh",
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
