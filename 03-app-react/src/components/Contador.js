import React, {useState,useEffect} from 'react'; //Estados de usuarios
import PropTypes from "prop-types";

const Contador = ({numero}) => {

    //useState
    const [state, setState] = useState(numero);  //Hooks?. State con mayus por estandar
    const [estadoTemporal, setEstadoTemporal] = useState(0);
    const ini=numero;

    // useEffect(() => {}, []);
    useEffect(() => {
        console.log("Render Contador");
    },[]); //lo corre desde que inicia el proyecto --> []

    useEffect(() => {
        console.log("Cambio de Estado Temporal"); //Cacha los cambios de estado de Temporal
    },[estadoTemporal]);

    const handleAdd = () =>{
        setState(state+1);
    };

    const handleRes = () =>{
        if (state == 0) {
            // document.querySelector("#resta").disable=true;
            document.getElementById('resta').disbale=true;

        } else{

            setState(state-1);
            setEstadoTemporal(3);

        }
    };

    const handleRestart = () =>{
        setState(ini);
        setEstadoTemporal(0);
    };
    
    return (
    <>
        <h1>Contador</h1>
        <h2>{state}</h2>
        <h2>{estadoTemporal}</h2>

        <button onClick={handleAdd}>+1</button>
        <button id="resta" onClick={handleRes}>-1</button>
        <button onClick={handleRestart}>Reiniciar</button>
    </>)
};

Contador.prototype={
    contador:PropTypes.number.isRequired
};

Contador.defaultProps = { //Valores por defecto de los props
    numero:0
};

export default Contador; //Se exporta el componente para poder ser usaro en index.js #12