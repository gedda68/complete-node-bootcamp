const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const CONNECTION_URL =
  'mongodb+srv://gedda:Hayley2000@cluster0-vedax.gcp.mongodb.net/test?retryWrites=true';
const DATABASE_NAME = 'CookeryBook';

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection('recipes');
      console.log('Connected to `' + DATABASE_NAME + '`!');
    }
  );

  app.get('/recipes', (request, response) => {
    collection.find({}).toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    });
  });

  app.get('/recipes/:id', (request, response) => {
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
