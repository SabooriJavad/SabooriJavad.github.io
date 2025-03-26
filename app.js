const{ findUsers, insertUser}=require('./mongodb-utils.js');

async function main(){
    const user= { make:'BMW', model:'X6', year:2023}
    const id =await insertUser(user);
    console.log(id);
    const users=await findUsers();
    console.log({users});

}
main();