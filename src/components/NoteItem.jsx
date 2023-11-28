import React from "react";

function NoteItem(props) {
    const { note } = props;
    console.log(note, "ini note item");

    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{note.createdAt}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;