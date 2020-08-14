import React, { useState } from 'react'
import List from './components/List'
import Title from './components/Title'
import Search from './components/Search'
import TodoList from './components/TodoList'
import ListFooter from './components/ListFooter'


const TodosApp = (props) => {
  const { currApp, changeApp } = props
  const [todoList, setTodoList] = useState([])
  const addNewTodos = () => {

  }

  const filterTodos = () => {

  }

  return (
    <div>
      <List 
        title={
          <Title 
            title={currApp}
            count={todoList.length}
          />
        }
        addNew={addNewTodos}
        search={
          <Search
            filterList={filterTodos}
          />
        }
        list={
          <TodoList />
        }
        footer={
          <ListFooter 
            currApp={currApp}
            changeApp={changeApp}
          />
        }
      >
      </List>
    </div>
  )
}


export default TodosApp