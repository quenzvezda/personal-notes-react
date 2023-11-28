import React from "react";
import NoteItem from "./NoteItem";

function NoteList(props) {
    const { notes } = props;

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDeleteNoteHandler={props.onDeleteNoteHandler} onChangeNoteArchieve={props.onChangeNoteArchieve}/>
            ))}
        </div>
    )
}

export default NoteList;