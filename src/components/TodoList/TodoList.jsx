import React from "react";
import "./TodoList.css";
function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.load && props.onLoad()}
      {(!props.load && !props.listTodos.length) &&  props.onEmptyTodos()}
      {props.listTodos.map(props.lista)}

      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
