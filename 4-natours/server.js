const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

//const CONNECTION_URL = "mongodb+srv://gedda:Hayley2000@cluster0-vedax.gcp.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = 'natours';

var dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
//const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
  MongoClient.connect(
    DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection('tours');
      console.log('Connected to `' + DATABASE_NAME + '`!');
    }
  );

  app.get('/tours', (request, response) => {
    collection.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    });
  });

  app.get('/tours/:id', (request, response) => {
    collection.findOne(
      { _id: new ObjectId(request.params.id) },
      (error, result) => {
        if (error) {
          return response.status(500).send(error);
        }
        response.send(result);
        console.log(`Result found for: ` + ObjectId(request.params.id));
      }
    );
  });
});
