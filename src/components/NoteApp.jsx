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
  }


  render() {
    return (
      <>
      <NoteHeader />
      <NoteBody />
      </>
    )
  }
}

export default NoteApp;

