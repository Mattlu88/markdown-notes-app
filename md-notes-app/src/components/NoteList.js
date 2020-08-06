import React from 'react';
import Title from './Title';
import CreateBtn from './CreateBtn';
import Search from './Search';
import Notes from './Notes';
import Nav from './Nav';
import './NoteList.css';

const NoteList = (props) => {
  const {
    createNewNote, 
    noteList,
    handleClickNote,
    currentNote,
  } = props;
  return (
    <div>
      <header>
        <Title />
        <CreateBtn createNewNote={createNewNote}/>
      </header>
      <main>
        <Search />
        <Notes 
          notes={noteList}
          onClick={handleClickNote}
          currentNote={currentNote}
        />
      </main>
      <nav>
        <Nav />
      </nav>
    </div>
  )
}

export default NoteList;