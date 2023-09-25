import React from 'react';
import { useState } from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
/* import { TodoList } from '../TodoList';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'; */




function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
