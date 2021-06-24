import React from 'react';
import PropTypes from "prop-types";

const Saludo = ({saludo,nombre}) => { //Destructuring

    return (
    <div>
        <h1>{saludo}</h1>
        <p>{nombre}</p>
    </div>
    );
};

Saludo.prototype = {
    saludo:PropTypes.string.isRequired,
};

Saludo.defaultProps = {
    nombre:"Sin nombre"
};

export default Saludo;