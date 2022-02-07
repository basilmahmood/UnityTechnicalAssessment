import Mongoose from 'mongoose';

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
console.log(uri);
Mongoose.connect(uri);

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('MongoDB Connection Established'));
