import React, { useEffect, useRef } from 'react'
import '../style/NoteEdit.css'

const NoteEdit = (props) => {
  const { note, setNote } = props
  
  const contentInput = useRef(null)
  const handleTitleChange  = (event) => {
    setNote({ ...note, title: event.target.value})
  }

  const handleContentChange  = (event) => {
    setNote({ ...note, content: event.target.value})
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
        />
      </div>
      <div>
        <textarea 
          id="note-content-input" 
          value={note.content} 
          onChange={handleContentChange} 
          placeholder="Start writing" 
          autoFocus={true}
          ref={contentInput}
        />
      </div>
    </div>
  )
}

export default NoteEdit
