const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
     text: String,
     author:{
        type: Schema.Types.ObjectId,
        ref: User
        },
     likes: {
         type: [ObjectId],
         ref: User
        },
     date: {
        type: Date,
        default: Date.now
        },
     score: Number,

    }
)

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;