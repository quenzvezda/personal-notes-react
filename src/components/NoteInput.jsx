import React, { useState } from "react";
import PropTypes from "prop-types";

function NoteInput(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 50;

  const handleTitleChange = (event) => {
    if (event.target.value.length <= maxTitleLength) {
      setTitle(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddNoteHandler({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {maxTitleLength - title.length}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul..."
          value={title}
          onChange={handleTitleChange}
          required
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatanmu disini..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  onAddNoteHandler: PropTypes.func,
};

export default NoteInput;