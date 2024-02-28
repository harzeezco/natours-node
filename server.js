const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.port || 3000;
app.listen(port, (req, res) => {
  console.log(`server is connected to port: ${port}`);
});
