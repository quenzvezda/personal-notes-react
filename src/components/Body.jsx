function Body() {
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form action="">
          <p className="note-input__title__chat-limit"></p>
          <input
            type="text"
            className="note-input__title"
            placeholder="Ini adalah judul"
          />
          <textarea
            className="note-input__body"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
      <h2>Catatan Aktif</h2>
      <div className="note-list"></div>
    </div>
  );
}

export default Body;
