const {MongoClient} =require('mongodb');

const url='mongodb://localhost:27017/'

const client= new MongoClient(url);

const DB_NAME ='my-database';

const COLLECTION_NAME='users';

async function connect() {
    await client.connect();


}

async function getCollection(){
    await connect();
    const db = client.db(DB_NAME);
    return db.collection(COLLECTION_NAME);

}
async function insertUser(user) {
    const collection = await getCollection();
    const result = await collection.insertOne(user);
    return result.insertedId;
    
}
async function findUsers() {
    const collection= await getCollection();
    const users= await collection.find({}).toArray();
    return users;

    
}
module.exports={ insertUser, findUsers};