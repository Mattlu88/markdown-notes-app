import React from 'react';

const CreateBtn = (props) => {
  const { handleOnClick } = props;

  return (
    <div>
      <button onClick={handleOnClick}>New</button>
    </div>
  )
}

export default CreateBtn;