import React from "react";
import PropTypes from "prop-types";

function NoteHeader(props) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Cari catatan..."
          onChange={(e) => props.onSearchNote(e.target.value)}
        />
      </div>
    </div>
  );
}

NoteHeader.propTypes = {
  onSearchNote: PropTypes.func,
};

export default NoteHeader;
