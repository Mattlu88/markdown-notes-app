import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Details from './components/Details';
import noteService from './services/notes'
import NoteList from './components/NoteList';
import Toolbar from './components/Toolbar';
import NoteEdit from './components/NoteEdit';
import DetailsFooter from './components/DetailsFooter';
import './App.css';

function App() {
  const notes = noteService
    .getNotes()
    .sort((a, b) => b.createdDate - a.createdDate);
  
  const [noteList, setNoteList] = useState(notes)
  const [note, setNote] = useState(notes[0])
  const [editDetails, setEditDetails] = useState(false)
  const [hideDetails, setHideDetails] = useState(true)

  const handleClickNote = (clickedNote) => {
    setNote(clickedNote)
    setEditDetails(false)
    setHideDetails(false)
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
    setNoteList([newNote, ...noteList])
    setNote(newNote)
    setEditDetails(!editDetails)
    setHideDetails(false)
  }

  const deleteNote = () => {
    const noteIndex = noteList.findIndex((n) => n.id === note.id)
    const newNoteList = noteList.filter((n) => n.id !== note.id)
    setNoteList(newNoteList)
    localStorage.setItem("notes", JSON.stringify(newNoteList))
    const newCurrentNote = noteIndex === newNoteList.length
      ? newNoteList[noteIndex - 1]
      : newNoteList[noteIndex]
    setNote(newCurrentNote)
    setHideDetails(true);
  }

  const saveNote = () => {
    const newNoteList = noteService.getNewNoteList(note, noteList)
    setNoteList(newNoteList)
    localStorage.setItem("notes", JSON.stringify(newNoteList))
    setEditDetails(false)
  }

  const cancelNote = () => {
    const preNote = noteList.find((n) => n.id === note.id)
    setNote(preNote)
    setEditDetails(false)
  }

  const editNote = () => {
    setEditDetails(true)
  }

  return (
    <div className="App">
      { hideDetails ? 
        <List addNew={createNewNote}>
          <NoteList 
            noteList={noteList} 
            onClick={handleClickNote}
            currentNote={note}
          />
        </List> :
        <Details
          toolbar={
            <Toolbar 
               editable={editDetails}
               handleClickBack={() => setHideDetails(true)}
               handleClickSave={saveNote}
               handleClickCancel={cancelNote}
               handleClickEdit={editNote}
            />
          }
          main={
            <NoteEdit 
              note={note}
              setNote={setNote}
              noteEditable={editDetails}
            />
          }
          footer={
            <DetailsFooter confirmDelete={deleteNote}/>
          }
        >
        </Details>
      }
    </div>
  );
}

export default App;
