const getNewNoteList = (newNote, noteList) => {
  if (noteList.find((n) => n.id === newNote.id)) {
    return noteList.map((n) =>
      n.id === newNote.id ? newNote : n)
  } else {
    return noteList.concat(newNote)
  }
}

export default { getNewNoteList }