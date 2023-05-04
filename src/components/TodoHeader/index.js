import React from "react";

function TodoHeader({children,load}) {
  //recibimos children 
  /**
   * Recibimos children y lo convertimos a un arreglo React.Children.toArray(children)
   * Como ahora es un arreglo se puede usar como tal y lo iteramos con .map
   * Con React.cloneElement(child, {load}) clonamos el elemento child que recibimos y entre {} le pasamos los parametros
   */
  return (
    <header>
      {React.Children.toArray(children).map(child => React.cloneElement(child, {load}))}
    </header>
  );
}

export { TodoHeader };
