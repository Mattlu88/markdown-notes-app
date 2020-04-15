import React from 'react'
import '../style/Toolbar.css'

const Toolbar = (props) => {
  const { note, noteList, setNoteList } = props

  const handleSaveNote = () => {
    console.log(note)
    if (noteList.find((n) => n.id === note.id)) {
      setNoteList(noteList.map((n) =>
         n.id === note.id ? note : n))
    } else {
      setNoteList(noteList.concat(note))
    }
  }

  const handleDeletNote = () => {

  }

  return (
    <div id="toolbar">
      <button onClick={handleSaveNote}>Save</button>
      <button onClick={handleDeletNote}>Delete</button>
    </div>
  )
}

export default Toolbar