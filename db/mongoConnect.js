const mongoose = require('mongoose');
//יאפשר לאפליקציה לקרוא משתנים מקובץ 
//ENV
require("dotenv").config()

main().catch(err => console.log(err));

async function main() {

  await mongoose.connect(process.env.MONGO_DB);
  console.log("mongo connect idf9 atlas");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}