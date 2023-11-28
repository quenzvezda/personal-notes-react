import React from "react";
import NoteItem from "./NoteItem";

function NoteList(props) {
    const { notes } = props;

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDeleteNoteHandler={props.onDeleteNoteHandler}/>
            ))}
        </div>
    )
}

export default NoteList;