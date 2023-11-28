import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList(props) {
  const { notes } = props;

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNoteHandler={props.onDeleteNoteHandler}
          onChangeNoteArchieve={props.onChangeNoteArchieve}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array,
  onAddNoteHandler: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onChangeNoteArchieve: PropTypes.func.isRequired,
};

export default NoteList;