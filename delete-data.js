let getClient=require('./utils');

async function deleteTodo(todoID){
    let client=await getClient();//if you hover over this function you seea promise is returend thereofre use await before get client
    let deleteTodo=`DELETE FROM todo WHERE id=$1`;
    let response=await client.query(deleteTodo,[todoID]);
}
deleteTodo(1);
module.exports=deleteTodo;