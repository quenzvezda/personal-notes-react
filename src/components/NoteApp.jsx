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
  }

  onAddNoteHandler(newNote) {
    this.setState(prevState => ({
        notes: [...prevState.notes, { ...newNote, id: Date.now(), archived: false, createAt: new Date().toISOString()}],
    }));
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }


  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody
          notes={this.state.notes} 
          onAddNoteHandler={this.onAddNoteHandler} 
          onDeleteNoteHandler={this.onDeleteNoteHandler}
        />
      </>
    );
  }
}

export default NoteApp;

