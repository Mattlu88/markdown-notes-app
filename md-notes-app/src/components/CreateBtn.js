import React from 'react';

const CreateBtn = (props) => {
  const { createNewNote } = props;

  return (
    <div>
      <button onClick={createNewNote}>New</button>
    </div>
  )
}

export default CreateBtn;