const SongModel = require("../models/Song");

exports.getAllSongs = async () => {
  return await SongModel.find();
};

exports.createSong = async (songData) => {
  return await SongModel.create(songData);
};

exports.getSongById = async (id) => {
  return await SongModel.findById(id);
};

exports.updateSong = async (id, updatedData) => {
  return await SongModel.findByIdAndUpdate(id, updatedData, { new: true });
};

exports.deleteSong = async (id) => {
  return await SongModel.findByIdAndDelete(id);
};
