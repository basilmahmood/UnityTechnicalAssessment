// --- Dependencies --- //
import 'dotenv/config'
import express from 'express'
import api from './api'
import './config/mongo'; // Importing for side-effects only

// Express
const app = express();
const port = 3000
app.use(express.json());
app.use('/api', api);

 // Listening
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})