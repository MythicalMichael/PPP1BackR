const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema(
    {
    
    }
)

const Song = mongoose.model("Song", songSchema);

module.exports = Song;