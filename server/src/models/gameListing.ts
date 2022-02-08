import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: Number, required: true }
});

const GameListingSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [ImageSchema], required: true },
  type: { type: Number, required: true },
  tags: { type: [String], required: true },
  author: { type: String, required: true },
  replayBundleUrlJson: { type: String, required: true },
  duration: { type: Number, required: true },
  isDownloadable: { type: Boolean, required: true },
  isStreamable: { type: Boolean, required: true },
  version: { type: String, required: true }
});

const GameListing = mongoose.model('GameListing', GameListingSchema);

export default GameListing;
