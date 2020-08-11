import React, { useEffect } from 'react'
import './NoteList.css'

const Note = (props) => {
  const { note, showNoteDetail, className } = props
  const date = new Date(note.createdDate)

  return (  
    <tr 
      className={className}
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
  const { noteList, onClick, currRow } = props
  console.log('rendering NoteList')

  useEffect(() => {
    const currentNote = noteList[currRow]
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
            {noteList.map((note, index) => {
              const className = index === currRow ? 'current-row' : ''
              return (
                <Note 
                  key={note.id}
                  note={note}
                  showNoteDetail={onClick}
                  className={className}
                />
              )
            })}
          </tbody>
        }
      </table>
    </div>
  )
}

export default NoteList