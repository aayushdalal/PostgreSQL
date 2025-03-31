let getClient=require('./utils');

async function createEnteries(){
    let client=await getClient();//if you hover over this function you seea promise is returend thereofre use await before get client
    //we are writing $1 and $2 in values because to save ourself from sql injection , sql injection is an attack in which our data can be breached from query we send, so to prevent data breach we send values in $1 and $2 to prevent sql injection
    let InsertUserTable=`INSERT INTO users(email,password)
                         VALUES(
                         $1,$2
                         )RETURNING id`;
    let userValues=['aayushdalal@gmail.com','123'];
    let response=await client.query(InsertUserTable,userValues);//yes now take care in clien query now you need to run two commands one of inserting values other for values to be inserted
    //in response the id returned from insertusert table is stored that is that user id you cretaed his id is returend in form of array , here only 1 user created so access this id by [0].id if we had multiple users created hen we can acceess the id by [1],[2]...
    console.log(response.rows[0].id);
    
    //insert values for another table of todo
    //now once you have made client you donnt need to make it again you are good now
    let InsertTodoTable=`INSERT INTO todo(title,description,user_id,done)
                         VALUES(
                         $1,$2,$3,$4
                         )RETURNING id`;
    //to add foregin key remember this syntax
    let TodoValues=['Buy grocerry','Milk,bread,egg',response.rows[0].id,false];
    //PASS THIS QUERY INTO THE CLIENT QUEERY
    await client.query(InsertTodoTable,TodoValues);
    console.log("value inserted");
    

}
module.exports=createEnteries;