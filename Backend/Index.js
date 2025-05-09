const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors()); 
app.use(express.json()); 


const mongoURI = 'mongodb+srv://aids:Aidss@podcastclub.es8hkbg.mongodb.net/atriaShows?retryWrites=true&w=majority';
 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error: ', err));


const VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  platforms: [String],
});

const Video = mongoose.model('Video', VideoSchema);


app.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).send('Error retrieving videos');
  }
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
