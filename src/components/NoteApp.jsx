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

    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleAddNote(newNote) {
    this.setState(prevState => ({
        notes: [...prevState.notes, { ...newNote, id: Date.now(), archived: false, createAt: new Date().toISOString()}],
    }));
  }


  render() {
    if (this.state.notes.length === 0) {
      return (
        <>
          <NoteHeader />
          <div className="empty-state">
            <h2>Tidak ada catatan untuk ditampilkan</h2>
            <p>Silakan tambahkan beberapa catatan.</p>
          </div>
        </>
      );
    }
    return (
      <>
        <NoteHeader />
        <NoteBody notes={this.state.notes} handleAddNote={this.handleAddNote} />
      </>
    );
  }
}

export default NoteApp;

