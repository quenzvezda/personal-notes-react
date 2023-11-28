import React from "react";
import { getData } from "../utils/data";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onChangeNoteArchieve = this.onChangeNoteArchieve.bind(this);

    this.onSearchNote = this.onSearchNote.bind(this);
  }

  onAddNoteHandler(newNote) {
    this.setState(prevState => ({
        notes: [...prevState.notes, { ...newNote, id: Date.now(), archived: false, createdAt: new Date().toISOString()}],
    }));
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onChangeNoteArchieve(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        }
      }
      return note;
    });

    this.setState({ notes });
  }

  onSearchNote = (searchText) => {
    this.setState({ searchQuery: searchText.toLowerCase() });
  }

  render() {
    const filteredNotes = this.state.searchQuery
        ? this.state.notes.filter(note =>
            note.title.toLowerCase().includes(this.state.searchQuery))
        : this.state.notes;

    return (
      <>
        <NoteHeader onSearchNote={this.onSearchNote}/>
        <NoteBody
          notes={filteredNotes} 
          onAddNoteHandler={this.onAddNoteHandler} 
          onDeleteNoteHandler={this.onDeleteNoteHandler}
          onChangeNoteArchieve={this.onChangeNoteArchieve}
        />
      </>
    );
  }
}

export default NoteApp;

