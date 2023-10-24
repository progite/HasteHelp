var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth: true
});

conn.connect(function(err){
    if (err)throw err;
    console.log("connected");
    conn.query("create database if not exists ")
});

// should be a function that gets the keywords and does lookup from the database and returns their id

function queryDatabase(topics) {
}