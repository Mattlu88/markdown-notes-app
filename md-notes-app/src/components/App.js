import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notes from './Notes';
import NoteEdit from './NoteEdit';
import Toolbar from './Toolbar';
import '../style/App.css';

const initNotes = [
  {
    id: 1,
    title: 'Best JavaScript books in 2020',
    content: 'This is an up-to-date list of recommended books for learning JavaScript',
    createdDate: '14/04/2020',
    createdBy: 'Fei Lu'
  },
  {
    id: 2,
    title: 'How to design better data tables',
    content: 'Data is useless without the ability to visualize and act on it. The success of future industries will couple advanced data collection with a better user experience, and the data table comprises much of this user experience.',
    createdDate: '13/04/2020',
    createdBy: 'Fei Lu'
  }
]
function App() {
  const [noteList, setNoteList] = useState(initNotes)
  const [note, setNote] = useState(noteList[0])

  const handleClickNote = (event, clickedNote) => {
    setNote(clickedNote)
  }

  const createNewNote = () => {
    const today = new Date()
    const newNote = {
      id: uuidv4(),
      title: '',
      content: '',
      createdDate: today,
      createdBy: 'Fei Lu'
    }
    setNoteList(noteList.concat(newNote))
    setNote(newNote)
  }

  return (
    <div className="App">
      <nav>
        <div>
          <input type="text" placeholder="search" />
        </div>
        <button onClick={createNewNote}>New Note</button>
      </nav>
      <main>
        <aside>
          <Notes 
            notes={noteList}
            onClick={handleClickNote}
            currentNote={note}
          />
        </aside>
        <section>
          <Toolbar 
            note={note}
            noteList={noteList}
            setNoteList={setNoteList}
          />
          <NoteEdit 
            note={note}
            setNote={setNote}
          />
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
