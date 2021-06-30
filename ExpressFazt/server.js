import express from "express";
import morgan from "morgan";

const app = express();

// const logger = (req, res, next) => {
//   console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//   next();
// };

// Entender Formatos JSON
app.use(express.json());
//app.use(logger);
app.use(morgan("dev"));

// app.all("/user", (req, res, next) => {
//   console.log("Antes de entrar a la ruta espeficada");
//   next();
// });

app.get("/userXD", (req, res) => {
  res.json({
    userName: "Senku",
    age: 27,
  });
});

app.post("/agent", (req, res) => {
  console.log(req.body);
  res.send("Post Request Received");
});

app.delete("/del/:id", (req, res) => {
  console.log(req.params);
  res.send(`User ${req.params.id} deleted`);
});

app.use(express.static("./ExpressFazt/public"));

app.listen(7000);
console.log("Server on port http://localhost:7000");
