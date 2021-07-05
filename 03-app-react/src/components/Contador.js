import React, {useState,useEffect} from 'react'; //Estados de usuarios #6 y #11
import PropTypes from "prop-types"; //Tipos de datos de los props, sirve ara hacer validaciones

//rfc
const Contador = ({numero}) => { //Componente funcional de React (rfc <- Snippet) *OJO* Todos los Coponentes deben iniciar con MAYÚS. y se llamaran igual que su contraparte .js

    //~~~Estados~~~

    //useState, state y effect son *HOOKS*, los cuales permiten usar el estado y otras caracteristicas sin tener que crear clases, aparentemente son más complicadas tanto para humanos como maquinas

    const [state, setState] = useState(numero);  // *OJO* Siempre se usa MAYÚS. despues de set y use (e.g set/use State) por estandar.
    //    nombre | variable para | Estado inicial = número desde index.js #19 Ó el valor defautl desde #61
    // del estado| para cambiar su valor |
    const [estadoTemporal, setEstadoTemporal] = useState(0);

    // const ini=numero; Cambio--comentar. Ya que el valor inicial ya esta siendo cachado en #8

    // useEffect(() => {}, []);
    useEffect(() => {
        console.log("Render Contador");
    },[]); //Como [] esta vacio lo corre desde que inicia el proyecto

    useEffect(() => {
        console.log("Cambio de Estado Temporal"); //Cacha los cambios de estado de Temporal por que se le indica dentro del []
    },[estadoTemporal]);

    const handleAdd = () =>{ //Función para aumentar el estado de uno en uno 
        setState(state+1);
    };

    const handleRes = () =>{ //Función para disminuir el estado de uno en uno y condicional para evitar números negativos
        if (state === 0) { //Se usa === ya que no solo evalua que el valor sea el mismo, adicionalmente valida el tipo de dato
            // document.querySelector("#resta").disable=true; //Funciona igual
            document.getElementById('resta').disable=true;

        } else{

            setState(state-1);
            setEstadoTemporal(3); //También le da el valor al estadoTeporal gracias a que se usa set, puede activar #

        }
    };

    const handleRestart = () =>{ //Función para resetear el valor del estado
        setState(numero); //cambio -- numero!=ini
        setEstadoTemporal(0); //Cambio del estado temporal, activa si o si #23
    };
    
    return ( // Esto retornará lo que se verá en el index.html, pero primero pasa por index.js *OJO* Los parentesis son *VITALES* si se retorna más de un elemento
    <>
        <h1>Contador</h1>
        <h2>{state}</h2> {/*Se r*/}
        <h2>{estadoTemporal}</h2>

        <button onClick={handleAdd}>+1</button> {/*Llamado a la función handleAdd*/}
        <button id="resta" onClick={handleRes}>-1</button> {/*Llamado a la función handleRes*/}
        <button onClick={handleRestart}>Reiniciar</button> {/*Llamado a la función handleRestart*/}
    </>)
};

Contador.prototype={ //Sirve para hacer validaciones. 
    contador:PropTypes.number.isRequired //Define el tipo de dato que será la prop y si será requerido
};

Contador.defaultProps = { //Sirve para asignar el valor por defecto del prop
    numero:0 //Asignación del valor predeterminado de la prop
};

export default Contador; //Se exporta el componente para poder ser usaro en index.js #12