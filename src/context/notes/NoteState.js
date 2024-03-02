import { useState } from "react";
import NoteContext  from "./noteContext";

const NoteState=(props)=>{

    const notesInitial = [
        {
          "_id": "65e039e90ed1805e62d0c4775",
          "user": "65df825f6f38ea2002573b8c",
          "title": "My Title",
          "description": "Plese wake-up early",
          "tag": "personal",
          "date": "2024-02-29T08:01:45.044Z",
          "__v": 0
        },
        {
          "_id": "65e03ab70ed2805e62d0c4778",
          "user": "65df825f6f38ea2002573b8c",
          "title": "My Title",
          "description": "Plese wake-up early morning",
          "tag": "personal",
          "date": "2024-02-29T08:05:11.030Z",
          "__v": 0
        },
        {
          "_id": "65e235e6fbbc55b94fe303273",
          "user": "65df825f6f38ea2002573b8c",
          "title": "Altams Pizza",
          "description": "Altamas Rizza is a Bad Boy",
          "tag": "Twitter",
          "date": "2024-03-01T20:09:10.239Z",
          "__v": 0
        },
        {
        "_id": "65e039e90ed4805e62d0c4775",
          "user": "65df825f6f38ea2002573b8c",
          "title": "My Title",
          "description": "Plese wake-up early",
          "tag": "personal",
          "date": "2024-02-29T08:01:45.044Z",
          "__v": 0
        },
        {
          "_id": "65e03ab70ed5805e62d0c4778",
          "user": "65df825f6f38ea2002573b8c",
          "title": "My Title",
          "description": "Plese wake-up early morning",
          "tag": "personal",
          "date": "2024-02-29T08:05:11.030Z",
          "__v": 0
        },
        {
          "_id": "65e235e6fbbc55b94fe303276",
          "user": "65df825f6f38ea2002573b8c",
          "title": "Altams Pizza",
          "description": "Altamas Rizza is a Bad Boy",
          "tag": "Twitter",
          "date": "2024-03-01T20:09:10.239Z",
          "__v": 0
        },
        {
          "_id": "65e33c305876cf6b63b20fc77",
          "user": "65df825f6f38ea2002573b8c",
          "title": "Mr Joke",
          "description": "World Wide Famous Celebrty",
          "tag": "YouTube",
          "date": "2024-03-02T14:48:16.410+00:00",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNote=(title,description,tag)=>{
      //TODO API Call
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
    const editNote=()=>{
      
    }

    //Delete a Note
    const deleteNote=()=>{
      
    }


    return(
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;