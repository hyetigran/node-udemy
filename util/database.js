const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://tigran:loveflix@cluster0-6fkmx.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      _db = client.db();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
