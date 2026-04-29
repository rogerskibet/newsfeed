require('dotenv').config();
const postRoutes = require('./routes/postRoutes')

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");



const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());
app.use('/posts',postRoutes);

app.get('/test', (req, res) => {
  res.send('API is running and connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});  