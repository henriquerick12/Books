import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletBook, selectBook, toggleBook } from "../store/bookReduce.js";

import Notes from "../components/Notes.jsx";

function SingleBookPage() {
  const { id } = useParams();
  const books = useSelector(selectBook);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = books.filter((item) => item.id == id)[0];

  const handleDeletBook = (id) => {
    if (confirm("Deseja apagar esse livro?")) {
      dispatch(deletBook(id));
      navigate("/");
    }
  };

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn">← Back to Books</button>
        </Link>

        {book ? (
          <div>
            <div className="single-book">
              <div className="book-cover">
                <img src={book.cover} />
              </div>

              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <h4 className="book-author">{book.author}</h4>
                <p>{book.synopsis}</p>
                <div className="read-checkbox">
                  <input
                    onClick={() => dispatch(toggleBook(book.id))}
                    type="checkbox"
                    defaultChecked={book.isRead}
                  />
                  <label>
                    {book.isRead ? "Already Read It" : "Haven't Read it yet"}
                  </label>
                </div>
                <div
                  onClick={() => handleDeletBook(book.id)}
                  className="erase-book"
                >
                  Erase book
                </div>
              </div>
            </div>
            <Notes id={book.id}/>
          </div>
        ) : (
          <h1>Book não encontrado</h1>
        )}
      </div>
    </>
  );
}

export default SingleBookPage;
