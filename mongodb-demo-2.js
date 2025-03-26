const{MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/';

const client = new MongoClient(url);

async function main(){
      try{
        await client.connect();
        console.log('connected to db');

        const db = client.db('my-database');
        const collection = db.collection('books');

        const newBook = {title:'HP', author:'JKR',pages:378};
        const result = await collection.insertOne(newBook);
        console.log(result.insertedId);

        const allBooks = await collection.find({}).toArray();
        
        for (let i = 0; i < allBooks.length; i++) {
            const book = allBooks[i];
            conole.log('Book' + (i+1), book);
            
        }
        
        
    }
    catch{
        console.log('something went wrong');

    }
}
main();