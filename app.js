const express=require('express')

const app=express()

const sql = require('mssql');

sql.connect(config).catch((err) => debug(err));









const port = 3000 || process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`)
});