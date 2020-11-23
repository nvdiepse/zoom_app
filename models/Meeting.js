
// connect postgress
var pg = require('pg');
var databaseConnect = require('./config/db');
var client = new pg.Client(databaseConnect);
client.connect();

