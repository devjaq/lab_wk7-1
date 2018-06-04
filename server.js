"use strict";

const http = require("http");
const quotes = require("./quotes");


http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/plain "});
  // res.write("still works!");
  let quotePick = quotes();
  res.write(`${quotePick}`);
  res.end();
}).listen(3000);