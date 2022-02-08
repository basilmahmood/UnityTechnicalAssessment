import Mongoose from 'mongoose';

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

let uri;
// Connect locally to hardcoded string
if (!DB_HOST) {
  uri = `mongodb://localhost:27017/unity-assessment-basil?retryWrites=true&w=majority`;
} 

// Connect to remote
else {
  uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
}

Mongoose.connect(uri);

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('MongoDB Connection Established'));
