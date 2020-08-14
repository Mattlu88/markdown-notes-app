import React from 'react';
import './Footer.css';

const ListFooter = (props) => {
  const { currApp, changeApp } =  props
  const notesBtnStyle = currApp === 'notes' ? 'notes-btn' : ''
  const todosBtnStyle = currApp === 'todos' ? 'todos-btn' : ''
  return (
    <footer className="footer-btns">
      <div>
        <button 
          className={notesBtnStyle}
          onClick={() => changeApp('notes')}
        >
          Notes
        </button>
      </div>
      <div>
        <button 
          className={todosBtnStyle}
          onClick={() => changeApp('todos')}
        >
          TO-dos
        </button>
      </div>
    </footer>
  )
}

export default ListFooter;