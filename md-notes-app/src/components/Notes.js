import React from 'react'

const Note = (props) => {
  const { note, onClick, currentNote } = props

  const style = note.id === currentNote.id ? 'current-note' : ''
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
        {note.createdDate.toString()}
      </td>
    </tr>
  )
}

const Notes = (props) => {
  const { notes, onClick, currentNote } = props
  const sortedNotes = notes
    .concat()
    .sort((a, b) => b.createdDate - a.createdDate)
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
            {sortedNotes.map((note) =>
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