const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql")

 

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lucid'
});



app.use(cors());
app.use(express.json());
// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
  



// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });




//  //-----------------------create api----------------------->
 app.get ('/api/get',(req,res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet,(error, result) => {
        res.send(result);

    });

 });
 




// //add new user
app.get('/',(req, res) => {
 
//  const sqlInsert = "INSERT INTO users (name,email,contact) VALUES ('varsha','gfi@gmail',9989101263)";
//   db.query(sqlInsert,(error, result) => {
//     console.log("error",error);
//     console.log("results",result  );
//     res.send('hello srikanth ');
//   });
});
 
app.listen(5000, () => {
  console.log("Server running successfully on 5000");
});