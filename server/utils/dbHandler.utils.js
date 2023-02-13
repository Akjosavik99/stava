const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

/* const mongoServer = new MongoMemoryServer(); */
let mongo = null;

exports.dbConnect = async () => {
  /* await mongoServer.start(); */
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  /* const mongooseOpts = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }; */

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

exports.dbDisconnect = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
};
