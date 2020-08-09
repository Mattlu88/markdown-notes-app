import React from 'react';

const Details = (props) => {

  return (
    <div>
      <header>
        {props.toolbar}
      </header>
      <main className="details">
        {props.main}
      </main>
      {props.footer}
    </div>
  );
}

export default Details;