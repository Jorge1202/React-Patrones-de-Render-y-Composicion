import React from 'react';
import { useTodos } from './useTodos';

import { TodoHeader } from "../components/TodoHeader";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm"

import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";


function App() {
  const {
    error,
    load,
    listTodos,
    onCompleteTodo,
    onDeleteTodo,
    openModal,
    completedTodos, 
    totalTodos,
    search, 
    setSearch,
    addTodo, 
    setOpenModal,
  } = useTodos();

 return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>

      <TodoList
        error={error}
        load={load}
        listTodos={listTodos}
        onError={()=><TodosError/>}
        onLoad={()=><TodosLoading/>}
        onEmptyTodos={()=><TodosEmpty/>}
        lista={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleteTodo={() => onCompleteTodo(todo)}
            onDeleteTodo={() => onDeleteTodo(todo)}
          />
        )}
      />

      {
        !!openModal && 
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      }

      <CreateTodoButton setOpenModal={setOpenModal}/>
    </React.Fragment>
  );
}

export default App;