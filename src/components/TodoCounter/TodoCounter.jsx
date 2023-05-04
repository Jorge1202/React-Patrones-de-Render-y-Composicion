import React from "react";
import "./TodoCounter.css";

function TodoCounter({completedTodos, totalTodos, load}) {
  return (
    <h2 className={`TodoCounter ${!!load && 'TodoCounter--load'}`}>
      Has complentado {completedTodos} de {totalTodos} ToDos
    </h2>
  );
}

export { TodoCounter };
