import { useState } from "react";
import React, { useContext } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial)


//Get all Notes
const getNotes = async () => {
  //API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkZjgyNWY2ZjM4ZWEyMDAyNTczYjhjIn0sImlhdCI6MTcwOTE0Njg5N30.dswuUOA4jbd_jCp4kpokPTwIhQ5Hjgb3TdkJHw2vcXo"
    },
  });
 // const json = response.json();
  const json = await response.json();
  console.log(json);
  setNotes(json)
}


  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO API Call
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkZjgyNWY2ZjM4ZWEyMDAyNTczYjhjIn0sImlhdCI6MTcwOTE0Njg5N30.dswuUOA4jbd_jCp4kpokPTwIhQ5Hjgb3TdkJHw2vcXo"
      },
      body: JSON.stringify({title, description, tag}),
    });
   // const json = response.json();

    console.log("adding a new note")
    const note = {
      "_id": "65e33c305876cf6b63b20fc77",
      "user": "65df825f6f38ea2002573b8c",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-03-02T14:48:16.410+00:00",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkZjgyNWY2ZjM4ZWEyMDAyNTczYjhjIn0sImlhdCI6MTcwOTE0Njg5N30.dswuUOA4jbd_jCp4kpokPTwIhQ5Hjgb3TdkJHw2vcXo"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

    //Logic to edit in Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

    //Delete a Note
    const deleteNote = async (id) => {
      //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkZjgyNWY2ZjM4ZWEyMDAyNTczYjhjIn0sImlhdCI6MTcwOTE0Njg5N30.dswuUOA4jbd_jCp4kpokPTwIhQ5Hjgb3TdkJHw2vcXo"
      }
    });
    const json = response.json();
    console.log(json)

      console.log("deleting note by id" + id);
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes);
    }


    return (
      <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes}}>
        {props.children}
      </NoteContext.Provider>
    )
}

export default NoteState;