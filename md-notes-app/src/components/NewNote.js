import React from 'react';

const NewNote = (props) => {
  const { createNewNote } = props;

  return (
    <div>
      <button onClick={createNewNote}>New</button>
    </div>
  )
}

export default NewNote;