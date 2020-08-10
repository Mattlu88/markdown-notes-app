const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem('notes'))
  return !notes ? [] : notes;
}

const addNewNote = (note)  => {
  const notes = JSON.parse(localStorage.getItem('notes')) || []
  localStorage.setItem("notes", JSON.stringify([note, ...notes]))
  return note
}

const updateNote = (note)  => {
  const notes = JSON.parse(localStorage.getItem('notes')) || []
  const newNotes = notes.map(n => n.id === note.id ? note : n)
  localStorage.setItem("notes", JSON.stringify(newNotes))
  return note
}

const deleteNote = (note)  => {
  const notes = JSON.parse(localStorage.getItem('notes')) || []
  const newNotes = notes.filter(n => n.id !== note.id)
  localStorage.setItem("notes", JSON.stringify(newNotes))
}

const getNewNoteList = (newNote, noteList) => {
  if (noteList.find((n) => n.id === newNote.id)) {
    return noteList.map((n) =>
      n.id === newNote.id ? newNote : n)
  } else {
    return noteList.concat(newNote)
  }
}

export default { getNewNoteList,
                 getNotes,
                 addNewNote,
                 updateNote,
                 deleteNote
               }