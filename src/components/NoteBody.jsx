import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody() {
    return (
        <div className='note-app__body'>
            <NoteInput />
            <h2>Catatan Aktif</h2>
            <NoteList />
            <h2>Arsip</h2>
            <NoteList />
        </div>
    );
}

export default NoteBody;