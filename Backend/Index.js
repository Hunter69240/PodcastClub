// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an Express app
const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON in requests

// MongoDB connection setup
const mongoURI = 'mongodb+srv://aids:Aidss@podcastclub.es8hkbg.mongodb.net/atriaShows?retryWrites=true&w=majority';
 // Replace this with your actual connection string from MongoDB Atlas

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Define a simple schema for video
const VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  platforms: [String],
});

const Video = mongoose.model('Video', VideoSchema);

// API endpoint to get all videos from the database
app.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).send('Error retrieving videos');
  }
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
