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

  console.log('rending List')
  console.log(props.children);
  return (
    <div>
      <header>
        <Title />
        <CreateBtn handleOnClick={addNew}/>
      </header>
      <main>
        <Search />
        {props.children}
      </main>
      <ListFooter />
    </div>
  )
}

export default List;