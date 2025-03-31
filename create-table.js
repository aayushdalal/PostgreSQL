let getClient=require('./utils');

async function createTabels(){
    let client=await getClient();//if you hover over this function you seea promise is returend thereofre use await before get client
    //create one table of user
    //now our clien is returned by getclient function
    let createUserTable=`CREATE TABLE users(
         id SERIAL PRIMARY KEY,
         email VARCHAR(250) UNIQUE NOT NULL,
         password Varchar(250) NOT NULL
    )`;
    //PASS THIS QUERY INTO THE CLIENT QUEERY
    await client.query(createUserTable)
    //now this again is a db operation of creating table so they takes time therefore dont forget to use await with aysn with them
   
    //create another table of todo
    //now once you have made client you donnt need to make it again you are good now
    let createtodoTable=`CREATE TABLE todo(
         id SERIAL PRIMARY KEY,
         title TEXT NOT NULL,
         description TEXT NOT NULL,
         user_id INTEGER REFERENCES users(id),
         done BOOLEAN DEFAULT FALS
    )`;
    //PASS THIS QUERY INTO THE CLIENT QUEERY
    await client.query(createtodoTable)
}
module.exports=createTabels;