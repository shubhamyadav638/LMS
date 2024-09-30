import adminUser from "../model/addCard.model.js";
import multer from "multer";
import path from "path";
const dir = path.join("./public/cards");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, dir);
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

export const uploadCards = multer({ storage: storage });

export const addCard = async (req, res) => {
  const cards = req.file.filename;

  const { owner, course, content } = req.body;

  const courseData = new adminUser({
    owner: owner,
    course: course,
    content: content,
    coursePdf: cards,
  });

  if (courseData) {
    const data = await courseData.save();
    res.status(201).json({ message: "created", data: data });
  } else {
    res.status(500).json({ message: "error" });
  }
};

export const getAllCards = async (req, res) => {
  try {
    const getCards = await adminUser.find();
    if (getCards) {
      res.status(200).json({ message: "cards found", cards: getCards });
    } else {
      res.status(400).json({ message: "cannot find cards" });
    }
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

// !  delete api
export const deleteCard = async (req, res) => {
  const id = String(req.params.id);

  const remove = await adminUser.findByIdAndDelete(id);
  if (remove) {
    res.status(200).json({ message: "user deleted" });
  } else {
    res.status(400).json({ message: "user not found" });
  }
};

// ! find cards by id
export const getCardsById = async (req, res) => {
  const { id } = req.params;

  const getCard = await adminUser.findById(id);
  if (getCard) {
    res.status(200).json({ message: "Card found", card: getCard });
  } else {
    res.status(400).json({ message: "Card not found" });
  }
};

// ! update API
export const updateCard = async (req, res) => {
  const { id } = req.params;
  const uploadFile = req.file.filename;
  const { owner, course, content } = req.body;
  if (uploadFile) {
    if (owner && content && course) {
      try {
        const data = await adminUser.findByIdAndUpdate(id, {
          $set: {
            owner: owner,
            course: course,
            content: content,
            coursePdf: uploadFile,
          },
        });

        if (data) {
          res.status(200).json({ message: "user updated" });
        } else {
          res.status(400).josn({ message: "unable to update user" });
        }
      } catch (e) {
        res.status(500).json({ message: "internal server error ", e: e });
      }
    } else {
      res.status(400).json({ message: "all fields are required" });
    }
  } else {
    res.status(500).json({ message: "file not found" });
  }
};
