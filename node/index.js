const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const port = 3000
const config = {
    host: 'db',
    password: 'root',
    user: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

// const sqlServer = ` 
//                     flush privileges;
//                     create table people(id int not null auto_increment, name varchar(255), primary key(id));`
// connection.query(sqlServer)
const sql = `INSERT INTO people(name) values ('Joaozinho')`
connection.query(sql)

const sqlSelect = `SELECT * FROM people`

var SELECT = {}
connection.query(sqlSelect, function(error, result){
    if (error) throw error;
    result.forEach(element => {
        console.log(element)
    });
    SELECT = result
})

connection.end()

app.get('/', (req, res) => {
    res.render('index', {SELECT: SELECT});
})

app.listen(port, () => {
    console.log("Rodando na porta 3000")
})