import React from "react";
import { getData } from "../utils/data";
import Header from "./Header";
import Body from "./Body";

class NoteApp extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Body />
      </>
    );
  }
}

export default NoteApp;
