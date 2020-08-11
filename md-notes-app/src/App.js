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
  
  const [editDetails, setEditDetails] = useState(false)
  const [hideDetails, setHideDetails] = useState(true)
  const [dataChanged, setDataChanged] = useState(false)
  const [currRow, setCurrRow] = useState(0)
  const [noteList, setNoteList] = useState(notes)
  const [note, setNote] = useState(currRow)
  const [initNote, setInitNote] = useState()

  const handleClickNote = (clickedNote) => {
    setCurrRow(noteList.indexOf(clickedNote));
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
    noteService.deleteNote(note)
    const newNoteList = noteService.getNotes();
    if (currRow === newNoteList.length) {
      setCurrRow(currRow - 1)
    }
    setNoteList(newNoteList)
    setHideDetails(true)
  }

  const saveNote = () => {
    if (noteList.find(n => n.id === note.id) !== undefined) {
      noteService.updateNote(note)
    } else {
      noteService.addNewNote(note)
      setCurrRow(0)
    }
    setNoteList(noteService.getNotes)
    setEditDetails(false)
  }

  const cancelNote = () => {
    if (noteList.find((n) => n.id === note.id) !== undefined) {
      setNote(initNote)
      setEditDetails(false)
    } else {
      //setNote(noteList[currRow])
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
            currRow={currRow}
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
