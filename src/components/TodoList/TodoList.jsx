import React from "react";
import "./TodoList.css";
function TodoList(props) {
  const renderFunc = props.children || props.render // valida contenido del componente 
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.load && props.onLoad()}
      {(!props.load && !props.totalTodos) &&  props.onEmptyTodos()}
      {(!!props.totalTodos && !props.listTodos.length) &&  props.onTodosSearchResultsEmpty(props.searchText)}
     
      {(!props.load && !props.error) && props.listTodos.map(renderFunc)}

      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
