import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write();
  res.end();
});

server.listen(7000);
console.log("Servidor en la url http://localhost:7000");
