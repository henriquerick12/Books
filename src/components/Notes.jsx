import { useSelector } from "react-redux";
import { selectNotes } from "../store/notesReduce";

function Notes({id}) {
  const notes = useSelector(selectNotes);

  return (
    <>
      <div className="notes-wrapper">
        <h2>Reader's Notes</h2>

        <div className="notes">
          {notes.map((note) => (
            <div key={note.id} className="note">
              <div className="erase-note">Erase note</div>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
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

            <button className="btn btn-block">Add Note</button>
          </form>
        </details>
      </div>
    </>
  );
}

export default Notes;
