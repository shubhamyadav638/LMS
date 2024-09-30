import mongoose from "mongoose";

const schema = new mongoose.Schema({
  owner: {
    type: String,
  },
  course: {
    type: String,
  },
  content: {
    type: String,
  },
  coursePdf: {
    type: String,
  },
});

const adminUser = mongoose.model("addcard", schema);

export default adminUser;
