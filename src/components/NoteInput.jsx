import React from "react";

function NoteInput() {
    return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form>
                <p className="note-input__title__char-limit">Sisa Karakter: 50</p>
                <input type="text" className="note-input__title" placeholder="Ini adalah judul..." required/>
                <textarea  className="note-input__body" name="" id="" cols="30" rows="10" placeholder="Tuliskan catatanmu disini..." required></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    )
}

export default NoteInput;