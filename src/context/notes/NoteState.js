import { useState } from "react";
import NoteContext  from "./noteContext";

const NoteState=(props)=>{

    const notesInitial = [
        {
          "_id": "65e039e90ed805e62d0c4775",
          "user": "65df825f6f38ea2002573b8c",
          "title": "My Title",
          "description": "Plese wake-up early",
          "tag": "personal",
          "date": "2024-02-29T08:01:45.044Z",
          "__v": 0
        },
        {
          "_id": "65e03ab70ed805e62d0c4778",
          "user": "65df825f6f38ea2002573b8c",
          "title": "My Title",
          "description": "Plese wake-up early morning",
          "tag": "personal",
          "date": "2024-02-29T08:05:11.030Z",
          "__v": 0
        },
        {
          "_id": "65e235e6fbbc55b94fe30327",
          "user": "65df825f6f38ea2002573b8c",
          "title": "Altams Pizza",
          "description": "Altamas Rizza is a Bad Boy",
          "tag": "Twitter",
          "date": "2024-03-01T20:09:10.239Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;