import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../store/bookReduce.js";

import Header from "../components/Header.jsx";

function AddBookPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTrue = useState(false);

  const pageTitle = "Add Book";

  function handleSubmitAdd(e) {
    e.preventDefault();
    const newBook = {
      title: document.querySelector("input[name=title]").value,
      cover: document.querySelector("input[name=cover]").value,
      isRead: false,
      author: document.querySelector("input[name=author]").value,
      synopsis: document.querySelector("textarea[name=synopsis]").value,
    };

    if (newBook.title && newBook.cover && newBook.author && newBook.synopsis) {
      dispatch(addBook(newBook));
      alert("Criado com sucesso!");
      navigate("/");
    } else {
      alert("Preencha os campos obrigatorios!");
    }
  }

  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />

        <form className="add-form">
          <div className="form-control">
            <label>Title *</label>
            <input type="text" name="title" placeholder="Add Book Title" />
          </div>
          <div className="form-control">
            <label>Book Cover *</label>
            <input required type="text" name="cover" placeholder="Add Cover" />
          </div>

          <div className="form-control">
            <label>Author *</label>
            <input type="text" name="author" placeholder="Add Author" />
          </div>

          <div className="form-control">
            <label>Synopsis *</label>
            <textarea
              type="text"
              name="synopsis"
              placeholder="Add a synopsis..."
            />
          </div>

          <button onClick={(e) => handleSubmitAdd(e)} className="btn btn-block">
            Save Book
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBookPage;
