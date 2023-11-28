import React from "react";
import { showFormattedDate } from "../utils/data";
import PropTypes from "prop-types";

function NoteItem(props) {
  const { note, onDeleteNoteHandler, onChangeNoteArchieve } = props;

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => {
            onDeleteNoteHandler(note.id);
          }}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => {
            onChangeNoteArchieve(note.id);
          }}
        >
          Arsipkan
        </button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onDeleteNoteHandler: PropTypes.function.isRequired,
  onChangeNoteArchieve: PropTypes.func.isRequired,
};

export default NoteItem;