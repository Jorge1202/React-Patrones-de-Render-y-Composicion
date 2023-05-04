import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'

function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div className="ChangeAlert__container">
                <div className="ChangeAlert__box">
                    <div className="ChangeAlert__mesagge">
                        <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                        <p>Sincroniza tus TODOs</p>
                        
                        <button onClick={()=>{toggleShow()}}>Sincronizar</button>
                    </div>
                </div>
            </div>
        )
        
    } else{ 
        return null
    }

}

const ChangeAlertWhitStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWhitStorageListener };