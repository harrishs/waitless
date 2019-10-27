const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("register");
  });
  return router;
};


// // route to handle the registration request
// app.post("/register", (req, res) => {
//   let email = req.body.email.trim();
//   let password = req.body.password.trim();

//   if (email === "" || password === "") {
//     res.status(400).send('Please make sure your email and password are provided');
//   } else if (getUserByEmail(email, userDatabase) !== null) {
//     res.status(400).send('Email already exists');
//   } else {

//     // hash password for security
//     const hashedPassword = bcrypt.hashSync(password,10);

//     // generate user with a random id
//     let randomId = generateRandomString();
//     let user = {
//       id: randomId,
//       email: req.body.email,
//       password: hashedPassword
//     };

//     //adding user to database
//     userDatabase[randomId] = user;
//     console.log(userDatabase);

//     //setting cookie containing user's new ID
//     req.session.theirUserId = randomId;
//     res.redirect("/");
//   }
// });


// //==============================================================================
// // this function generates a random string for ID and short URL
// //==============================================================================
// const generateRandomString = function() {
//   let randomString = "";
//   const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvxyz";
//   let alphaLength = alpha.length;

//   for (let i = 0; i < 6; i ++) {
//     randomString += alpha.charAt(Math.floor(Math.random() * alphaLength));
//   }
//   return randomString;
// }
