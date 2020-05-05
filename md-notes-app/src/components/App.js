import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notes from './Notes';
import NoteEdit from './NoteEdit';
import Toolbar from './Toolbar';
import '../style/App.css';
import noteService from '../services/notes'

function App() {
  const [noteList, setNoteList] = useState([])
  const [note, setNote] = useState(noteList[0])
  const [noteEditable, toggleNoteEditable] = useState(false)

  const handleClickNote = (clickedNote) => {

    const newNoteList = noteService.getNewNoteList(note, noteList)
    setNoteList(newNoteList)
    setNote(clickedNote)
    toggleNoteEditable(false)
    localStorage.setItem("notes", JSON.stringify(newNoteList))
  }

  const createNewNote = () => {
    const today = new Date()
    const newNote = {
      id: uuidv4(),
      title: '',
      content: '',
      createdDate: Date.parse(today),
      createdBy: 'Fei Lu'
    }
    setNoteList([newNote].concat(noteList))
    setNote(newNote)
    toggleNoteEditable(!noteEditable)
  }

  useEffect(() => {  
    const initNoteList = JSON.parse(localStorage.getItem('notes'))
    console.log(initNoteList)
    if (initNoteList.length > 0) {
      setNoteList(initNoteList
        .sort((a, b) => b.createdDate - a.createdDate))
      setNote(initNoteList[0])
    }
  }, [])

  return (
    <div className="App">
      <nav>
        <div>
          <input type="text" placeholder="search" />
        </div>
        <button onClick={createNewNote}>New Note</button>
      </nav>
      <main>
        <aside>
          <Notes 
            notes={noteList}
            onClick={handleClickNote}
            currentNote={note}
          />
        </aside>
        <section>
          {noteList.length > 0 &&
            <Toolbar 
              note={note}
              setCurrentNote={setNote}
              noteList={noteList}
              setNoteList={setNoteList}
              noteEditable={noteEditable}
              toggleNoteEditable={toggleNoteEditable}
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
      <footer>

      </footer>
    </div>
  );
}

export default App;
