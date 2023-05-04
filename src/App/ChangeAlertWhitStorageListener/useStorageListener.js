import React from "react";

function useStorageListener(sincronize){
    const [storegeChange, setStoregeChange] = React.useState(false);

    window.addEventListener('storage', (change)=>{
        if(change.key === 'ListTodos'){
            console.log('Hubo cambios ');
            setStoregeChange(true)
        }
    })

    const toggleShow = ()=>{
        setStoregeChange(false)
        sincronize();
    }

    return {
        show:storegeChange,
        toggleShow
    }
}

export { useStorageListener }