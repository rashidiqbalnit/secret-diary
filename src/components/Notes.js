import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes()
    //eslint-disable-next-line
  }, [])
  
  const ref = useRef(null)
  const [note, setNote] = useState({etitle: "", edescription: "", etag: "default"})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote(currentNote);
    setNote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

  const handleClick=(e)=>{
    console.log("Updating the note....",note)
    e.preventDefault();
    //addNote(note.title, note.description, note.tag);
   }
   const onChange=(e)=>{
   setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.tag} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  {/*<input type="text" className="form-control" id="description" name="description" onChange={onChange}/>*/}
                  <textarea id="emessage" name="edescription" rows="3" cols="146" placeholder="write here ...." type="message" className="form-control" value={note.description} onChange={onChange}></textarea>
                </div>
                {/*<button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>*/}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  )
}

export default Notes
