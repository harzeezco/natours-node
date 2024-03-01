const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then((con) => {
  console.log('DB connection successful');
});

const port = process.env.port || 8000;
app.listen(port, (req, res) => {
  console.log(`server is connected to port: ${port}`);
});
