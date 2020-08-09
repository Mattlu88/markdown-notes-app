import React, { useEffect, useRef } from 'react'
import showdown from 'showdown'
import './NoteEdit.css'

const NoteEdit = (props) => {
  const { note, setNote, noteEditable } = props
  
  const contentInput = useRef(null)
  const handleTitleChange  = (event) => {
    setNote({ ...note, title: event.target.value})
  }

  const handleContentChange  = (event) => {
    setNote({ ...note, content: event.target.value})
  }

  const createNoteInHTML = () => {
    const noteInHTML = new showdown.Converter().makeHtml(note.content)
    return { __html: noteInHTML }
  }

  useEffect(() => {
    contentInput.current.focus()
  }, [note.id])

  return (
    <div>
      <div>
        <input 
          type="text" 
          id="note-title-input" 
          value={note.title} 
          onChange={handleTitleChange}
          placeholder="Title"
          readOnly={!noteEditable}
        />
      </div>
      <div>
        {!noteEditable ? 
          <div
            id="note-content-input"
            ref={contentInput}
            dangerouslySetInnerHTML={createNoteInHTML()}
          >
          </div> :
          <textarea 
            id="note-content-input"
            value={note.content}
            onChange={handleContentChange} 
            placeholder="Start writing" 
            autoFocus={true}
            ref={contentInput}
            readOnly={!noteEditable}
          />
        }
      </div>
    </div>
  )
}

export default NoteEdit
