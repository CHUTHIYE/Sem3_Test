const songService = require("../services/Songservice");

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();
    res.json({ data: songs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSong = async (req, res) => {
  try {
    const song = await songService.createSong(req.body);
    res.json({ data: song, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const songId = req.params.id;
    const song = await songService.getSongById(songId);
    res.json({ data: song, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const songId = req.params.id;
    const updatedSong = await songService.updateSong(songId, req.body);
    res.json({ data: updatedSong, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const songId = req.params.id;
    const deletedSong = await songService.deleteSong(songId);
    res.json({ data: deletedSong, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
