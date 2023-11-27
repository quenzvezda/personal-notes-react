import React from "react";
import NoteItem from "./NoteItem";

function NoteList() {
    return (
        <div className="notes-list">
            <NoteItem />
            <NoteItem />
        </div>
    )
}

export default NoteList;