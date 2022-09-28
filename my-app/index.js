const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const { query } = require("express");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lucid",
});

app.use(cors());
app.use(express.json());
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));

// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });

//  //-----------------------create api----------------------->
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM users";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});
//<-------------view--------->
app.get("/api/get/:id", (req, res) => {
  const {id} = req.params;
  const sqlGet = "SELECT * FROM users WHERE id = ?";
  db.query(sqlGet, id,(error, result) => {
    if (error) {
      console.log(error)
    }
    res.send(result);
  });
});

app.put("/api/put/:id", (req, res) => {
  const {id} =req.params;
  const {name,emai,phoneNo,query} = req.body;
  const sqlUpdate = "UPDATE users  SET name = ?,email=?,phoneNo=?,query=?  WHERE id = ?";
  db.query(sqlGet, [name,email,phoneNo,query],(error, result) => {
    if (error) {
      console.log(error)
    }
    res.send(result);
  });
});
//<----------------------------post api--------------------->
app.post("/api/post", (req, res) => {
  const { name, email, phoneNo, query } = req.body;
  const sqlInsert =
    "INSERT INTO users (name,email,phoneNo,query) VALUES (?,?,?,?)";
  db.query(sqlInsert, [name, email, phoneNo, query], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

// //add new user
app.get("/", (req, res) => {
   const sqlInsert = "INSERT INTO users (name,email,phoneNo,query) VALUES ('varsha','gfi@gmail','9999999','KILL')";
    db.query(sqlInsert,(error, result) => {
      console.log("error",error);
      console.log("results",result  );
      res.send('hello srikanth ');
    });
});

app.listen(5000, () => {
  console.log("Server running successfully on 5000");
});
