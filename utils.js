require('dotenv').config()
//go to pg documentation , in node-postgress site look for pg orm
//node-postgress is excellent for using postgress wiht nodejs
let {Client}=require('pg')//we need Clinet from pg , pooling is not needed as of now
async function getClient(){
    // clients will also use environment variables
    // for connection information
     const client = new  Client({
        user: 'postgres',//here enter your postgress account username
        password: process.env.PASSWORD,//here type the password of your postgress
        // host: 'database.server.com',//mostly its local host only
        host: 'localhost',
        // port: 3211, by default your posgress port is 5432
        port:5432,
        // database: 'mydb',
        database:'tododb',
      })
     await client.connect()
     console.log('db connected');
     
     //we did it inside function because it was writtn await here and we can only use await with aysn fucntions and now roll of this function shoudl be to return something
     return client;
}

module.exports= getClient;