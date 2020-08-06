import React from 'react';
import Toolbar from './Toolbar';
import NoteEdit from './NoteEdit';

const NoteDetails = (props) => {
  const {
    note,
    setNote,
    noteList,
    setNoteList,
    noteEditable,
    toggleNoteEditable,
    backToList,
  } = props;

  return (
    <main>
        <section className="details">
          {noteList.length > 0 &&
            <Toolbar 
              note={note}
              setCurrentNote={setNote}
              noteList={noteList}
              setNoteList={setNoteList}
              noteEditable={noteEditable}
              toggleNoteEditable={toggleNoteEditable}
              backToList={backToList}
            />
          }
          {noteList.length > 0 &&
            <NoteEdit 
              note={note}
              setNote={setNote}
              noteEditable={noteEditable}
            />
          }
        </section>
    </main>
  );
}

export default NoteDetails;