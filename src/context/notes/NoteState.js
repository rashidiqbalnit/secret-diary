import { useState } from "react";
import NoteContext  from "./noteContext";

const NoteState=(props)=>{
    const s1 = {
        "name": "Rashid",
        "class": "12th"
    }
    const [state, setState] = useState(s1);
    const update = () =>{
       setTimeout(()=>{
         setState({
            "name": "Harry",
            "class": "10b"
         })
       },1000)
    }

    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;