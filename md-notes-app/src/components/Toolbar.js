import React from 'react'
import '../style/Toolbar.css'

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
    if (noteList.find((n) => n.id === note.id)) {
      setNoteList(noteList.map((n) =>
         n.id === note.id ? note : n))
    } else {
      setNoteList(noteList.concat(note))
    }
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
      setNoteList(noteList.filter((n) => n.id !== note.id))
      const newCurrentNote = (noteIndex === noteList.length - 1) 
        ? noteList[noteIndex - 1] : noteList[noteIndex + 1]
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