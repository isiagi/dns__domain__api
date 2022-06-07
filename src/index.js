const express = require('express');
const cors = require('cors');
const router = require('./routers/router')

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/v1/', router)

app.get('/home', (req, res) => {
  res.send('hello');
});


app.listen(5000, () => {
  console.log(`we are running on Port 5000`);
});
