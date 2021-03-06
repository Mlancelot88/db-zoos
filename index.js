const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Our server is connected!");
});

// endpoints here

const port = 3500;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
