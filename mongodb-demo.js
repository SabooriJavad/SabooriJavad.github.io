const { MongoClient } = require('mongodb');

const url='mongodb://localhost:27017/';

const client = new MongoClient(url);

async function main (){
await client.connect();
console.log('connected to db');

const db =client.db('my-database');
const collection =db.collection('users');

const user = {make:'BMW', model:'340', year:2018};
const result= await collection.insertOne(user);
console.log(result.insertedId);

const users = await collection.find({}).toArray();
console.log(users);



}
main();