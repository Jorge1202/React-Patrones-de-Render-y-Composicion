import React from "react";

function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [storegeChange, setStoregeChange] = React.useState(false);

        window.addEventListener('storage', (change)=>{
            if(change.key === 'ListTodos'){
                console.log('Hubo cambios ');
                setStoregeChange(true)
            }
        })

        const toggleShow = ()=>{
            setStoregeChange(false)
            props.sincronize();
        }
        return (
            <WrappedComponent
                show={storegeChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }