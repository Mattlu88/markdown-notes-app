import React, { useEffect, useRef } from 'react'
import showdown from 'showdown'
import './NoteEdit.css'

const NoteEdit = (props) => {
  const {
    note,
    setNote,
    noteEditable,
    setNoteEditable,
    initNote,
    setDataChanged
  } = props
  
  const contentInput = useRef(null)
  const handleTitleChange  = (event) => {
    if (note.title !== initNote.title) {
      setDataChanged(true)
    }
    setNote({ ...note, title: event.target.value})
  }

  const handleContentChange  = (event) => {
    if (note.content !== initNote.content) {
      setDataChanged(true)
    }
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
          onClick={() => setNoteEditable(true)}
        />
      </div>
      <div>
        {!noteEditable ? 
          <div
            id="note-content-input"
            ref={contentInput}
            dangerouslySetInnerHTML={createNoteInHTML()}
            onClick={() => setNoteEditable(true)}
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
