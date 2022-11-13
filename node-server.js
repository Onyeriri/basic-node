const http = require("http");

const server = http.createServer((req, res) => {
  //routes
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>Home page...</h2>");
    res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>About page...</h2>");
    res.end();
  }
});

server.listen(8000, "localhost", () => {
  console.log("Connect to port 3000");
});
