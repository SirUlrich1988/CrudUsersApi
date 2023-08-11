const uuid = require("uuid");
const Users = require("../../models/users.models");

Users.bulkCreate([
  {
    id: uuid.v4(),
    firstName: "Manuel",
    lastName: "Hernandez",
    email: "hernandez@example.com",
    password: "root",
    phone: "+52 9981835631",
    birthday: "21/04/1999",
    gender: "Masculino",
    country: "Mexico",
  },
  {
    id: uuid.v4(),
    firstName: "Diana",
    lastName: "Marin",
    email: "marin@example.com",
    password: "root123",
    phone: "+52 8851231231",
    birthday: "09/01/1988",
    gender: "Femenino",
    country: "Ecuador"
  },
  {
    id: uuid.v4(),
    firstName: "Maria",
    lastName: "Hernandez",
    email: "maria@example.com",
    password: "root123",
    phone: "+52 8875231231",
    birthday: "20/04/1988",
    gender: "Femenino",
    country: "Peru"
  },
  {
    id: uuid.v4(),
    firstName: "Ricardo",
    lastName: "Valle",
    email: "valle@example.com",
    password: "root123",
    phone: "+52 6387231231",
    birthday: "06/05/1988",
    gender: "Masculino",
    country: "Brazil"
  },
  {
    id: uuid.v4(),
    firstName: "Roberto",
    lastName: "Alvarado",
    email: "alvarez@example.com",
    password: "root123",
    phone: "+52 1216831231",
    birthday: "07/09/1988",
    gender: "Masculino",
    country: "Panama"
  }
  
]);
