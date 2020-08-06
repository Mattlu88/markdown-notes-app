import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteList from './components/NoteList';
import NoteDetails from './components/NoteDetails';
import './App.css';
import noteService from './services/notes'

function App() {
  const [noteList, setNoteList] = useState([])
  const [note, setNote] = useState(noteList[0])
  const [noteEditable, toggleNoteEditable] = useState(false)
  const [hideDetails, toggleHideDetails] = useState(true)
  const handleClickNote = (clickedNote) => {

    const newNoteList = noteService.getNewNoteList(note, noteList)
    setNoteList(newNoteList)
    setNote(clickedNote)
    toggleNoteEditable(false)
    localStorage.setItem("notes", JSON.stringify(newNoteList))
    toggleHideDetails(!hideDetails)
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
    toggleHideDetails(!hideDetails)
  }

  useEffect(() => {  
    const initNoteList = JSON.parse(localStorage.getItem('notes'))
    if (initNoteList.length > 0) {
      setNoteList(initNoteList
        .sort((a, b) => b.createdDate - a.createdDate))
      setNote(initNoteList[0])
    }
  }, [])

  return (
    <div className="App">
      { hideDetails ? 
        <NoteList 
          createNewNote={createNewNote}
          noteList={noteList}
          handleClickNote={handleClickNote}
          currentNote={note}
        /> :
        <NoteDetails
          note={note}
          setNote={setNote}
          noteList={noteList}
          setNoteList={setNoteList}
          noteEditable={noteEditable}
          toggleNoteEditable={toggleNoteEditable}
          backToList={toggleHideDetails}
        />
      }
    </div>
  );
}

export default App;
