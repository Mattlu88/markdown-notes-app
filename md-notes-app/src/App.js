import React, { useState } from 'react';
import NotesApp from './NotesApp';
import TodosApp from './TodosApp';
import './App.css';

const App = () => {
  const [currApp, setCurrApp] = useState('notes');
  console.log(currApp);
  return (
    <div>
      { currApp === 'notes' ?
        <NotesApp 
          currApp={currApp} 
          changeApp={setCurrApp}
        /> :
        <TodosApp
          currApp={currApp} 
          changeApp={setCurrApp}
        />
      }
    </div>
  )
}

export default App;