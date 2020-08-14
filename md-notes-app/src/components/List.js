import React from 'react';
import Title from './Title';
import CreateBtn from './CreateBtn';
import './List.css';

const List = (props) => {
  const {
    addNew, 
  } = props;

  return (
    <div>
      <header>
        {props.title}
        <CreateBtn handleOnClick={addNew}/>
      </header>
      <main>
        <section className="search">
          {props.search}
        </section>
        <section className="list">
          {props.list}
        </section>
      </main>
      {props.footer}
    </div>
  )
}

export default List;