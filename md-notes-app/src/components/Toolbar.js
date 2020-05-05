import React from 'react'
import '../style/Toolbar.css'
import noteService from '../services/notes'

const Toolbar = (props) => {
  const {
    note, 
    setCurrentNote,
    noteList,
    setNoteList,
    noteEditable,
    toggleNoteEditable } = props

  const handleEditNote = () => {
    toggleNoteEditable(!noteEditable)
  }

  const handleSaveNote = () => {
    const newNoteList = noteService.getNewNoteList(note, noteList)
    setNoteList(newNoteList)
    localStorage.setItem("notes", JSON.stringify(newNoteList))
    toggleNoteEditable(!noteEditable)
  }

  const handleCancelEdit = () => {
    const preNote = noteList.find((n) => n.id === note.id)
    setCurrentNote(preNote)
    toggleNoteEditable(!noteEditable)
  }

  const handleDeletNote = () => {
    if (window.confirm(`The note ${note.title} will be deleted`)) {
      const noteIndex = noteList.findIndex((n) => n.id === note.id)
      const newNoteList = noteList.filter((n) => n.id !== note.id)
      setNoteList(newNoteList)
      localStorage.setItem("notes", JSON.stringify(newNoteList))
      const newCurrentNote = noteIndex === newNoteList.length
        ? newNoteList[noteIndex - 1]
        : newNoteList[noteIndex]
      setCurrentNote(newCurrentNote)
    } 
  }
  return (
    <div id="toolbar">
      { !noteEditable && 
        <button onClick={handleEditNote}>Edit</button> }
      { noteEditable && 
        <button onClick={handleSaveNote}>Save</button> }
      { noteEditable && 
        <button onClick={handleCancelEdit}>Cancel</button> }
      <button onClick={handleDeletNote}>Delete</button>
    </div> 
  )
}

export default Toolbar