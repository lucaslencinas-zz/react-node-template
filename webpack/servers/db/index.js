const MongoClient = require('mongodb').MongoClient;

let db;

function connect(url) {
  return MongoClient.connect(url)
    .then((dbObject) => (db = dbObject));
}

function insert(entity, collectionName) {
  const collection = db.collection(collectionName);
  if (Array.isArray(entity)) {
    return collection.insertMany(entity);
  }
  return collection.insertOne(entity);
}

function find(query, collectionName) {
  return db.collection(collectionName).findOne(query);
}

function search(query, collectionName) {
  return db.collection(collectionName).findMany(query);
}

function remove(filter, collectionName) {
  return db.collection(collectionName).deleteMany(filter);
}

function update(selector, updatedEntity, collectionName) {
  return db.collection(collectionName).updateMany(selector, updatedEntity);
}

module.exports = {
  connect,
  insert,
  find,
  search,
  remove,
  update
};
