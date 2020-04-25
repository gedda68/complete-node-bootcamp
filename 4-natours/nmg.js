const MongoClient = require('mongodb').MongoClient;
const uri =
  'mongodb+srv://gedda:Hayley2000@cluster0-vedax.gcp.mongodb.net/?w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db('natours').collection('tours');
  // perform actions on the collection object
  client.close();
});
