import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import PropTypes from "prop-types";

function NoteBody(props) {
  const { notes } = props;

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput onAddNoteHandler={props.onAddNoteHandler} />
      <h2>Catatan Aktif</h2>
      {activeNotes.length === 0 ? (
        <p className="note-list__empty-message">Tidak ada catatan</p>
      ) : (
        <NoteList
          notes={activeNotes}
          onDeleteNoteHandler={props.onDeleteNoteHandler}
          onChangeNoteArchieve={props.onChangeNoteArchieve}
        />
      )}
      <h2>Arsip</h2>
      {archivedNotes.length === 0 ? (
        <p className="note-list__empty-message">Tidak ada catatan</p>
      ) : (
        <NoteList
          notes={archivedNotes}
          onDeleteNoteHandler={props.onDeleteNoteHandler}
          onChangeNoteArchieve={props.onChangeNoteArchieve}
        />
      )}
    </div>
  );
}

NoteBody.propTypes = {
  notes: PropTypes.array,
  onAddNoteHandler: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
  onChangeNoteArchieve: PropTypes.func.isRequired,
};

export default NoteBody;