import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin.clice";
import cardSlice from "./card.slice";
import productSlice from "./product.slice";


const store = configureStore({
    reducer: {
       admin :adminSlice,
       card :cardSlice,
       product: productSlice
    }
})

export default store;