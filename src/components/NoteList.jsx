import React from "react";
import NoteItem from "./NoteItem";

function NoteList(props) {
    const { notes } = props;

    return (
        <div className="notes-list">
            {notes.map((note) => (
                // Tambahkan return di sini
                <NoteItem key={note.id} note={note} />
            ))}
        </div>
    )
}

export default NoteList;