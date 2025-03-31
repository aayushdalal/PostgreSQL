let getClient=require('./utils');

async function updateTodo(todoID){
    let client=await getClient();//if you hover over this function you seea promise is returend thereofre use await before get client
    let updateTodo=`UPDATE todo SET done=$1 WHERE id=$2`;
    let response=await client.query(updateTodo,[true,todoID]);
}
updateTodo(1);

module.exports=updateTodo;