import React, { useEffect } from 'react'
import './NoteList.css'

const Note = (props) => {
  const { note, showNoteDetail, currentNote } = props
  const style = note.id === currentNote.id ? 'current-note' : ''
  const date = new Date(note.createdDate)

  return (  
    <tr 
      className={style}
      onClick={() => showNoteDetail(note)}
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

const NoteList = (props) => {
  const { noteList, onClick, currentNote } = props
  console.log('rendering NoteList')

  useEffect(() => {
    if (currentNote) {
      const currentTrElement = document.getElementById(currentNote.id)
      currentTrElement.scrollIntoView({ block: 'center' })
    }
  }, [])

  return (
    <div className="notes-container">
      <table>
        { noteList.length > 0 && 
          <tbody>
            {noteList.map((note) =>
              <Note 
                key={note.id}
                note={note}
                showNoteDetail={onClick}
                currentNote={currentNote}
              />)}
          </tbody>
        }
      </table>
    </div>
  )
}

export default NoteList