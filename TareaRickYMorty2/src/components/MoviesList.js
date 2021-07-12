//##########Primer paso para la creación de componentes *

// ~~~Jerarquía de IMPORTS~~~

import React, { useState,useEffect } from 'react'; //~~Componentes por defecto de REACT

import { Card,Segment } from 'semantic-ui-react'; //~~Dependencias

import Api from '../utils.js/Api'; //~~Componentes propios. Se usa {} ya que no es una exportación por defecto y se llama a un item específico
import ItemMovie from './ItemMovie'; 



const MoviesList=()=> { //Componente funcional de react RFC
    const [movieslist, setMovieslist] = useState([]); //Hooks, creación de Estado movieslist. Después de set SIEMPRE MAYÚS.
    const pers=prompt("Escribe");
    useEffect(() => { //Hook, detecta el cambio de un estado, pero como el [] esta vacio lo que hace es ejecuatrlo al momento
        fetchData(pers);
    }, []);

    const fetchData =(title) =>{
        Api.getMovies(title)
        .then((resp)=>{
            console.log(resp);
                setMovieslist(resp.data.results);
        })
        .catch((err)=>{
            console.log("error por mí".err);
        });
    };

    const CreateItems =()=>{
        return movieslist.map((movie)=>
        <ItemMovie
            image={movie.image}
            name={movie.name}
            id={movie.id}
        />);
    };
    
    return (
        <>
         <h1>Lista de Películas</h1>
         <Segment raised>
         <Card.Group> {CreateItems()} </Card.Group>
         </Segment>
        </>
    );
};

export default MoviesList;