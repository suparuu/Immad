import nc from "next-connect";

const handler = nc();

handler.get( async(req, res)=>{
  let data = await new Promise( (resolve,reject)=> {
    connection.query('select * from table1', (err,result) =>{
      resolve(result);
    }) 

  } )

  /* let data = await connection.query('select * from table1', (err,result)=>{
    console.log(result);
  }) */
  res.send(data);
})

export default handler;


var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "svc.sel3.cloudtype.app",
  user: "root",
  password: "1234",
  database: "test",
  port: 30605,
});

/* export default function handler(req, res) {
  
  connection.connect();

  connection.query("SELECT * from table1", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });

  connection.end();

  res.status(200).json({ name: "John Doe" });
} */
