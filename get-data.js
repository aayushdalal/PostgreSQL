let getClient=require('./utils');

async function getUsers(){
    let client=await getClient();
    let selectUserText=`SELECT * FROM users`;
    let userResponse= await client.query(selectUserText);
    // console.log(userResponse);//here you can see many field our focus is on rows
    for(let user of userResponse){
        console.log(`ID:${user.id}, Email:${user.email}`);
    }    
}
// getUsers();

//now we will get user corresponding to the email we provide
async function getUsersFromEmail(email){
    let client=await getClient();
    //NEVER FORGET TO PUT SEMI COLON AFTER THE BELOW QUERY
    let selectUserText=`SELECT * FROM users WHERE email=$1`;//use $1 to here to prevent from sql injection
    let response= await client.query(selectUserText,[email]);//we always send the second argument as a array not directly
    for(let user of response){
        console.log(`ID:${user.id}, Email:${user.email}`);
    }   
}
// getUsersFromEmail('aayushdalal@gmail.com')

//now lets get todo fro that user
async function getTodoForUser(user_id){
    let client=await getClient();
    let selectTodoText=`SELECT * FROM todo WHERE user_id=$1`;
    let todoResponse= await client.query(selectTodoText,[user_id]);
    for(let todo of todoResponse){
        console.log(`ID:${todo.id}, title:${todo.title},Descrpition:${todo.description}, DONE:${todo.done}`);
    }   
}
getTodoForUser(1);
module.exports={getUsers,getUsersFromEmail,getTodoForUser};