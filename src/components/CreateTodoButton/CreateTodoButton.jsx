import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {

  const onClickAgregarTodo = () => {
    setOpenModal(prevState => !prevState); //optenemos el estado actal de setOpenModal y ese lo negamos  
  };

  return (
    <button onClick={onClickAgregarTodo} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
