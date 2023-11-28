import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody(props) {
    const { notes } = props;

    const activeNotes = notes.filter(note => !note.archived);
    const archivedNotes = notes.filter(note => note.archived);

    return (
        <div className='note-app__body'>
            <NoteInput onAddNoteHandler={props.onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            {(activeNotes.length === 0) ? <p className='note-list__empty-message'>Tidak ada catatan</p> : <NoteList notes={activeNotes} onDeleteNoteHandler={props.onDeleteNoteHandler}/>}
            <h2>Arsip</h2>
            {(archivedNotes.length === 0) ? <p className='note-list__empty-message'>Tidak ada catatan</p> : <NoteList notes={archivedNotes} onDeleteNoteHandler={props.onDeleteNoteHandler}/>}
        </div>
    );
}

export default NoteBody;