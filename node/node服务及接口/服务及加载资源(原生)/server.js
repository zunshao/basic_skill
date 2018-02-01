let http = require("http");
let url = require("url");
let util = require("util");
let fs = require("fs");

let server = http.createServer((req, res) => {
  var pathname = url.parse(req.url).pathname;
  fs.readFile(`./${pathname}`, function(err, data) {
    if (err) {
      res.wrriteHead(404, {
        "Content-Type": "text/html"
      });
    } else {
      res.writeHead(200, {
        "Content-type": "text/html"
      });
      res.write(data.toString());
    }
    res.end();
  });
});

server.listen(3009, "127.0.0.1", () => {
  console.log("service is start");
});
