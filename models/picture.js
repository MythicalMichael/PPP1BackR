const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema(
    {
    
    }
)

const Picture = mongoose.model("Picture", pictureSchema);

module.exports = Picture;