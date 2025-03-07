const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
}).promise();


async function addSchool(name,address,latitude,longitude)
{
     const queryToInsert='insert into school (name,address,latitude,longitude) values (?,?,?,?)';
     const res= await pool.query(queryToInsert,[name,address,latitude,longitude]);
     return res;
     
}

async function getSchools()
{
    const [schools]=await pool.query('select * from school');
    return schools;
}

module.exports={pool,addSchool,getSchools};