//Primer paso para la creación de componentes *
import React from 'react';

import NavBar from './NavBar';

const MoviesList=()=> {
    return (
        <>
        <NavBar name="home"/>
         <h1>Lista de Películas</h1>   
        </>
    );
};

export default MoviesList;