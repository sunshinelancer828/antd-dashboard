import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const refreshTokens = new Schema({
  token: {
    type: String,
    required: true
  }
});

const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
    },
    state: {
      type: Number,
      default: 1
    },
    creator: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

mongoose.set("useCreateIndex", true);
RoomSchema.plugin(uniqueValidator);

export default mongoose.model("Room", RoomSchema);
