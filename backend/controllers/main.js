// main.js
const mysql = require('mysql');
const connData = {
	host: 'localhost',
	user: 'root',
	password: 'x4pcmysql',
	port: 3306,
	database: 'geteat'
}
let db_query = function (query,options) {
	options = options || connData;
 	return new Promise(function(resolve, reject) {
  	let {host, user, password, database} = options;
	console.log("Connecting to " + connData['host']);
  	let conn = mysql.createConnection({
	    host     : host,
	    user     : user,
	    password : password,
	    database : database
	  })
	conn.connect()
	conn.query(query, (err, data) => (err ? reject(err) : resolve(data)))
	conn.end()
 })
}



module.exports.getErrors = async (req, res, next) => {
	console.log('retireving errors from db');
	let result = await db_query('SELECT * FROM errors ORDER BY ts DESC LIMIT 10')
	console.log('Found '+(result?result.length:'0')+' errors records');
	return res.json(result)	
}



//------mock
module.exports.mockup = (req, res, next) => {
	console.log('mockup');
	res.json(JSON.stringify({
		labels: [1, 2, 3, 4],
		data: [800, 800, 140, 300]
	}));
}
