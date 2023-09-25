import React from 'react';
import { useState } from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
/* import { TodoList } from '../TodoList';
 *//* import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
 */


function App() {
  const [state, setstate] = useState('');
  return (
    <React.Fragment>
    <TodoHeader />
    <TodoList />
    </React.Fragment>
  )
}

function TodoHeader() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  )
}

function TodoList() {
  return (
    <>
    <TodoItem />
    </>
  )
}

function TodoCounter() {
  return (
    <>
    <p>TodoCounter</p>
    </>
  )
}

function TodoSearch() {
  return (
    <>
    <p>TodoSearch</p>
    </>
  )
}

function TodoItem() {
  return (
    <>
    <p>TodoItem</p>
    </>
  )
}

/* function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
} */

export default App;
