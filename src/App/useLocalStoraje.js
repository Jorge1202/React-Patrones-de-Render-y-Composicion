import React from "react";

function useLocalStoraje(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(fxReducer, initialState(initialValue));
  const {
    sincronizedTodos,
    load,
    error,
    item
  } = state
  // const [sincronizedTodos, setSincronizedTodos] = React.useState(true);
  // const [load, setLoad] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [item, setItem] = React.useState(initialValue);

  //#region ACTION CREATORS
  const onSuccess = (item) => {
    dispatch({ type: actionTypes.SUCCESS, payload: item })
  }
  const onSave = (item) => {
    dispatch({ type: actionTypes.SAVE, payload: item })
  }
  const onError = (item) => {
    dispatch({ type: actionTypes.ERROR, payload: item })
  }
  const onSincronize = () => {
    dispatch({ type: actionTypes.SINCRONIZE })
  }
  //#endregion ACTION CREATORS



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
        onSuccess(parsedItem)

        // setItem(parsedItem);
        // setLoad(false);
        // setSincronizedTodos(true)
      } catch (e) {
        onError(e)
        // setError(e);
      }
    }, 2000);
  }, [sincronizedTodos]);

  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      onSave(newItem)
      // setItem(newItem);
    } catch (e) {
      onError(e)
      // setError(e);
    }
  };

  const sincronize = () => {
    onSincronize()
    // setLoad(true)
    // setSincronizedTodos(false)
  }

  return { item, saveItem, load, error, sincronize };
}

const initialState = (initialValue) => ({
  sincronizedTodos: true,
  load: true,
  error: false,
  item: initialValue
})

const actionTypes = {
  SUCCESS: 'SUCCESS',
  SAVE: 'SAVE',
  ERROR: 'ERROR',
  SINCRONIZE: 'SINCRONIZE',

}

const reducerObject = (state, payload) => ({
  [actionTypes.SUCCESS]: {
    ...state,
    item: payload,
    load: false,
    sincronizedTodos: true
  },
  [actionTypes.SAVE]: {
    ...state,
    item: payload,
  },
  [actionTypes.ERROR]: {
    ...state,
    error: payload,
  },
  [actionTypes.SINCRONIZE]: {
    ...state,
    load: true,
    sincronizedTodos: false
  }
})


const fxReducer = (state, action) => {
  //OPCION 1  
  // if (reducerObject(state)[action.type]) {
  //     return reducerObject(state, action.payload)[action.type]
  // } else {
  //     return state
  // }

  //OPCION 2
  return reducerObject(state, action.payload)[action.type] || state

}




export { useLocalStoraje };
