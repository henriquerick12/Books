import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookReduce";
import notesReduce from "./notesReduce";

export default configureStore({
  reducer: {
    books: booksReducer,
    notes: notesReduce,
  },
});
