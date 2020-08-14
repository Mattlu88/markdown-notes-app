import React from 'react';
import './Title.css';

const Title = (props) => {
  const { title, count } = props;

  return (
    <div>
      <button>
        All {title}
      </button> 
      <p>{count} {title}</p>
    </div>
  )
}

export default Title;