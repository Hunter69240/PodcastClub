const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  youtubeLink: String,
  thumbnailUrl: String,
  platforms: [String],
});

module.exports = mongoose.model('Video', videoSchema);
