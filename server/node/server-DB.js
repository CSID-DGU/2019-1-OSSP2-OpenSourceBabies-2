var express=require('express');
var app=express();
var cors=require('cors');
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/osbprjt', function(req,res){
  asyncFunction();
})

var mariadb=require('mariadb');
const pool=mariadb.createPool({
    host: 'osbprjt-mariadb.cn5jnnyimkqr.ap-northeast-2.rds.amazonaws.com',
    user: 'osbAdmin',
    password: 'dnflrkWkddldi',
    port: 3306,
    connectionLimit: 5
});

async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
    conn.query('use osbmariaDB');
	const rows = await conn.query("SELECT * from map");
    console.log('The solution is: ', rows);


  } catch (err) {
	throw err;
  } finally {
    console.log('finish');
	if (conn) return conn.end();
  }
}


app.listen(3001, function(){
    console.log('DBServer is running...');
});