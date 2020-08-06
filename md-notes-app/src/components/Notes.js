import React, { useEffect } from 'react'
import './Notes.css'

const Note = (props) => {
  const { note, onClick, currentNote } = props
  const style = note.id === currentNote.id ? 'current-note' : ''
  const date = new Date(note.createdDate)

  return (  
    <tr 
      className={style}
      onClick={() => onClick(note)}
      id={note.id}>
      <td className="note-title">
        {(!note.title) ? 'Untitle' : note.title}
      </td>
      <td>
        {note.content}
      </td>
      <td>
        {date.toLocaleString("en-GB")}
      </td>
    </tr>
  )
}

const Notes = (props) => {
  const { notes, onClick, currentNote } = props
  useEffect(() => {
    if (currentNote) {
      const currentTrElement = document.getElementById(currentNote.id)
      currentTrElement.scrollIntoView()
    }
  }, [])
  return (
    <div className="notes-container">
      <table>
        { notes.length > 0 && 
          <tbody>
            {notes.map((note) =>
              <Note 
                key={note.id}
                note={note}
                onClick={onClick}
                currentNote={currentNote}
              />)}
          </tbody>
        }
      </table>
    </div>
  )
}

export default Notes