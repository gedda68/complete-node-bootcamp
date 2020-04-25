const MongoClient = require('mongodb').MongoClient;
const url: 'mongodb://ec2-52-220-168-61.ap-southeast-1.compute.amazonaws.com:27017/arcusairdbsmc';

async function main() {
const client = new MongoClient(url, { newUrlParser: true });

try {
    await client.connect();
    console.log('connected!');
    await client.close();
  } catch (err) {
    console.dir(err);
  }
}

main().catch(console.dir);