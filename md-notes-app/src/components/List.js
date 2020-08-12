import React from 'react';
import Title from './Title';
import CreateBtn from './CreateBtn';
import Search from './Search';
import ListFooter from './ListFooter';
import './List.css';

const List = (props) => {
  const {
    addNew, 
  } = props;

  return (
    <div>
      <header>
        <Title />
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
      <ListFooter />
    </div>
  )
}

export default List;