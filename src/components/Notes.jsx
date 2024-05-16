import { useDispatch, useSelector } from "react-redux";
import { addNotes, deletNote, selectNotes } from "../store/notesReduce";

function Notes({ id }) {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  let note = notes.filter((item) => item.book_id == id);

  const handleAddNote = (e) => {
    e.preventDefault();

    let newNote = {
      book_id: id,
      title: document.querySelector("input[name=title]").value,
      text: document.querySelector("textarea[name=note]").value,
    };

    if (newNote.text && newNote.title) {
      dispatch(addNotes(newNote));
      alert("Nota adicionada com sucesso!");
      document.querySelector("input[name=title]").value = "";
      document.querySelector("textarea[name=note]").value = "";
    } else {
      alert("Campos vazios");
    }
  };

  const handleDeletNote = (id) => {
    if (confirm("Deseja apagar mesmo a nota?")) {
      dispatch(deletNote(id));
    }
  };

  return (
    <>
      <div className="notes-wrapper">
        <h2>Reader's Notes</h2>
        <div className="notes">
          {note.map((item) => (
            <div key={item.id} className="note">
              <div
                onClick={() => handleDeletNote(item.id)}
                className="erase-note"
              >
                Erase note
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <details>
          <summary>Add a note</summary>
          <form className="add-note">
            <div className="form-control">
              <label>Title *</label>
              <input type="text" name="title" placeholder="Add a note title" />
            </div>
            <div className="form-control">
              <label>Note *</label>
              <textarea type="text" name="note" placeholder="Add note" />
            </div>

            <button onClick={(e) => handleAddNote(e)} className="btn btn-block">
              Add Note
            </button>
          </form>
        </details>
      </div>
    </>
  );
}

export default Notes;
