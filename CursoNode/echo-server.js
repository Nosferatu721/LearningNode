import http from "http";
import moment from "moment";

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url == "/birthday") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString().split("/");

        let day = body[0];
        let month = body[1] - 1;
        let year = body[2];
        let birthday = new Date(year, month, day);
        console.log(birthday);

        let dia = moment(body, "DD/MM/YYYY").format("dddd");
        res.write(dia);
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(7000);
console.log("Servidor en la url http://localhost:7000");
