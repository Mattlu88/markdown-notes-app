import React from 'react'

const Note = (props) => {
  const { note, onClick, currentNote } = props

  console.log('rendering note')
  const style = note.id === currentNote.id ? 'current-note' : ''
  const date = new Date(note.createdDate)
  return (  
    <tr 
      className={style}
      onClick={() => onClick(note)}>
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
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>All Notes</th>
          </tr>
        </thead>
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