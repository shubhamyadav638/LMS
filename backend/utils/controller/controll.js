import userModel from "../model/user.model.js";
import multer from "multer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const home = async (req, res) => {
  const data = await userModel.find().select("-password");

  if (data) return res.status(200).json({ message: "ok", data: data });
};

import path from "path";
const dir = path.join("./public");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, dir);
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

export const uploads = multer({ storage: storage });

export const createUser = async (req, res) => {
  try {
    const fileUpload = req.file.filename;
    const {
      fname,
      lname,
      email,
      mobile,
      address,
      city,
      zipcode,
      password,
      dob,
    } = req.body;

    if (
      fname ||
      lname ||
      email ||
      mobile ||
      address ||
      city ||
      zipcode ||
      password ||
      dob
    ) {
      const checkMail = await userModel.findOne({ email: email });
      if (checkMail) {
        res.status(400).json({ message: "email is already registerd" });
      } else {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);

        const data = new userModel({
          fname: fname,
          lname: lname,
          email: email,
          mobile: mobile,
          address: address,
          city: city,
          zipPostalCode: zipcode,
          password: hash,
          file: fileUpload,
          dob: dob,
        });

        if (data) {
          const store = await data.save();
          res.status(201).json({ message: "sucess", status: "ok" });
          console.log(store);
        } else {
          res
            .status(400)
            .json({ message: "Error saving data", status: "failed" });
        }
      }
    } else {
      res.status(400).json({ message: "all fields are required" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// !   email endpoint
export const emailcheck = async (req, res) => {
  const { email } = req.body;
  const checkpoint = await userModel.findOne({ email });
  if (checkpoint) {
    res.status(400).json({ message: "email registered" });
  } else {
    res.status(200).json({ message: "email not found" });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const UserEmail = await userModel.findOne({ email: email });

    if (!UserEmail) {
      return res.status(404).json({ message: "Email not found" });
    }

    const isValidPassword = await bcrypt.compare(password, UserEmail.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const id = UserEmail._id;
    const token = jwt.sign({ userId: id }, "abc", { expiresIn: "5d" });

    res.status(200).json({ message: "Login successful", token: token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (user) {
      res
        .status(200)
        .json({ message: "User deleted successfully", data: user });
    }
  } catch (e) {
    res.status(400).json({ message: "intrenal server delete error", err: e });
  }
};

// !   update User endpoints

export const updateUSer = async (req, res) => {
  const { id } = req.params;
  const fileUpload = req.file.filename;
  const { fname, lname, email, mobile, address, city, zipcode, password, dob } =
    req.body;

  try {
    const user = await userModel.findByIdAndUpdate(
      id,
      {
        $set: {
          fname: fname,
          lname: lname,
          email: email,
          mobile: mobile,
          address: address,
          city: city,
          zipPostalCode: zipcode,
          password: password,
          file: fileUpload,
          dob: dob,
        },
      },
      { new: true }
    );

    if (!user) {
      console.log(`User not found with ID: ${id}`);
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Updated successfully", result: user });
  } catch (e) {
    console.error(`Error updating user: ${e}`);
    res.status(500).json({ message: "Update failed", error: e });
  }
};

export const findUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) return res.status(400).json({ message: "User not found" });

  res.status(200).json({ message: "user found", data: user });
};


export const resetPassword =  async(req, res)=>{
  
}