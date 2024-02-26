//This is a javascript hashing script for Hashing and salting example saver

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt')

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});



// Synchronously hash the password 

let hash=bcrypt.hashSync(myPlaintextPassword,saltRounds);
console.log(hash);
let result=bcrypt.compareSync(myPlaintextPassword,hash);
console.log(result);

$2b$12$XT3KdYzhy/i2llCU8VJg9.fBTxdvJGXUNv.ACnI/pJ6J6Cw0qxGKC
