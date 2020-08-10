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
  const [dataChanged, setDataChanged] = useState(false)
  const [initNote, setInitNote] = useState();

  const handleClickNote = (clickedNote) => {
    setNote(clickedNote)
    setInitNote(clickedNote)
    setDataChanged(false)
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
    //setNoteList([newNote, ...noteList])
    setNote(newNote)
    setInitNote(newNote)
    setDataChanged(false)
    setEditDetails(true)
    setHideDetails(false)
  }

  const deleteNote = () => {
    const noteIndex = noteList.findIndex((n) => n.id === note.id)
    noteService.deleteNote(note)
    const newNoteList = noteService.getNotes();
    const newCurrentNote = noteIndex === newNoteList.length
      ? newNoteList[noteIndex - 1]
      : newNoteList[noteIndex]
    setNoteList(newNoteList)
    setNote(newCurrentNote)
    setHideDetails(true)
  }

  const saveNote = () => {
    if (noteList.find(n => n.id === note.id) !== undefined) {
      noteService.updateNote(note)
    } else {
      noteService.addNewNote(note)
    }
    setNoteList(noteService.getNotes)
    setEditDetails(false)
  }

  const cancelNote = () => {
    if (noteList.find((n) => n.id === note.id) !== undefined) {
      setNote(initNote)
      setEditDetails(false)
    } else {
      setNote(noteList[0])
      setHideDetails(true)
    }
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
               dataChanged={dataChanged}
            />
          }
          main={
            <NoteEdit 
              note={note}
              setNote={setNote}
              noteEditable={editDetails}
              setNoteEditable={setEditDetails}
              initNote={initNote}
              setDataChanged={setDataChanged}
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
