// Notes start from here
// Agar hume kuch bhi start karna hai toh, hume Test hata kar waha par khud ka "Start script bana"
// padega taaki, hum usse start karsake...!!
// abb hume npm install express karke express kon install karna hai..!!
// hume kya karna hai uske baad kii express kon add karna hai, dependencies main jakar
// hume install karna hai dotEnv file for
// production of the application, aur yeh apka ek env
// file certain privacy data kon hide karne mai help karta hai.
// yaha par humne express import taaki woh dekh sake isse, basicall utha liya hai variable ka form mai..
// import express from "express";
// variable ka form mai maine express kon bahar nikala hai.

// abb yaha par env kon call karna padega
require("dotenv").config();

const express = require("express");
// app ek bahot powerful weapon hai jisme woh sabhi kona acquire karega like e.g. Math.floor, Math.random..
const app = express();
// port ka matlab hota hai kaha par hum isse deploy karenge konsa server par jon hai 3000
// yaha par listen ho raha arrow function with send call

const port = 3000;
// app kon ek req jayegi server ka jaha par woh jakar dekhega kii hume kuch call mila hai kii nahi niche listen se
app.get("/", (req, res) => {
  // yaha par basically ek response send kare rahe production kon taaki
  // woh listen kar sake
  res.send("Hello Akshat Kumar");
});

// abb yaha par listen kon mila toh thik woh return
// kareega arrow function ka form mai kya req kon '/', iske through..!!

// aajao ek hum apna ek naya app function banate hai jon call karega arrow function mai..
// bana liya hai maine yaha par ek backend server url for my website url Akshat Kumar
app.get("/twitter", (req, res) => {
  res.send("Akshat Kumar");
});

// yaha listen par humne sikha hai kii kaha par se woh file kon utha kar yaha par shift karega
// aur yeh process.env.PORT file se call karwa dega
app.listen(process.env.PORT, () => {
  console.log(`The port is running successful ${port}`);
});
