import express from "express";
const route = express.Router();
import {
  createUser,
  deleteUser,
  emailcheck,
  findUser,
  home,
  loginUser,
  updateUSer,
  uploads,
} from "../controller/controll.js";
import {
  addCard,
  deleteCard,
  getAllCards,
  getCardsById,
  updateCard,
  uploadCards,
} from "../controller/addCard.controller.js";

// ! admin users
route.get("/", home);
route.post("/create", uploads.single("file"), createUser);
route.post("/login", loginUser);
route.post("/checkMail", emailcheck);
route.delete("/deleteAdmin/:id", deleteUser);
route.put("/updateUser/:id", uploads.single("file"), updateUSer);
route.get("/findUserById/:id", findUser);

// !  card API
route.post("/addCard", uploadCards.single("pdf"), addCard);
route.get("/cards", getAllCards);
route.delete("/deleteCard/:id", deleteCard);
route.put("/updateCard/:id", uploadCards.single("pdf"), updateCard);
route.get("/getCardById/:id", getCardsById);

export default route;
