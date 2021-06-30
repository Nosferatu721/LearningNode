import express from "express";
import mysql from "mysql2";

const app = express();

// * Settings
app.set("view engine", "ejs");
app.set("views", "./ExpressMySql/views");
app.use(express.static("node_modules/materialize-css/dist"));

app.get("/", (req, res) => {
  const connec = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nueva",
  });
  connec.query("SELECT * FROM usuarios", (err, results, fields) => {
    if (err) {
      res.send("Error");
      console.log("Error:", err.sqlMessage);
    } else {
      res.render("./index.ejs", { data: results });
    }
  });
});

app.listen(7000);
console.log("Server on port: http://localhost:7000");
