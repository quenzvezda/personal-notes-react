import React from "react";

function NoteItem() {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">Functional Component</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;