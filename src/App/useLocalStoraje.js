import React from "react";

function useLocalStoraje(itemName, initialValue) {
  const [sincronizedTodos, setSincronizedTodos] = React.useState(true);
  const [load, setLoad] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        console.log('Entro para refrescar');
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = [];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoad(false);
        setSincronizedTodos(true)
      } catch (e) {
        setError(e);
      }
    }, 2000);
  },[sincronizedTodos]);

  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      setItem(newItem);
    } catch (e) {
      setError(e);
    }
  };

  const sincronize = ()=>{
    console.log('cargar lista por cambios');
    console.log(sincronizedTodos);
    setLoad(true)
    setSincronizedTodos(false)
  }

  return { item, saveItem, load, error, sincronize };
}

export { useLocalStoraje };
