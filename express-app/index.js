const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const CONNECTION_URL = 'mongodb://127.0.0.1:27017/forum_app_db';

const testRoutes = require('./routes/posts.js');

const app = express()
const port = 8080
app.use(cors());

app.use('/testAPI', testRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function connectToDB() {
  try {
    const server = await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
}
connectToDB();
