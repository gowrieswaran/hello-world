//import the http package
const http = require("http");

//const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(port, () => {
    console.log(`Server is running at port ${PORT}/`);
  });
