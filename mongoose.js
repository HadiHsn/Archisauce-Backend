
const mongoose = require('mongoose');
// set mongoose Promise to Bluebird

let mongoUri = "mongodb+srv://user:archisaucepassword@cluster0.pckzq.mongodb.net/archisaucedb?retryWrites=true&w=majority";

mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

exports.connect = () => {
  console.log('Connect to mongo: ', mongoUri);
  mongoose.connect(
    mongoUri,
    {
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  return mongoose.connection;
};
