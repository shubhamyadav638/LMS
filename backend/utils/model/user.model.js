import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },

    address: {
      type: String,
    },
    city: {
      type: String,
    },
    zipPostalCode: {
      type: String,
    },
    file: {
      type: String,
    },
    password: {
      type: String,
    },
    dob: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", schema);

export default userModel;
