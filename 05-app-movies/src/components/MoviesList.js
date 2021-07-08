//##########Primer paso para la creación de componentes *

// ~~~Jerarquía de IMPORTS~~~

import React, { useState,useEffect } from 'react'; //~~Componentes por defecto de REACT

import ItemMovie from './ItemMovie'; //~~Dependencias
import { CardGroup,Card,Segment } from 'semantic-ui-react';

import Api from '../utils.js/Api'; //~~Componentes propios. Se usa {} ya que no es una exportación por defecto y se llama a un item específico
import NavBar from './NavBar';



const MoviesList=()=> { //Componente funcional de react RFC
    const [movieslist, setMovieslist] = useState([]); //Hooks, creación de Estado movieslist. Después de set SIEMPRE MAYÚS.

    useEffect(() => { //Hook, detecta el cambio de un estado, pero como el [] esta vacio lo que hace es ejecuatrlo al momento
        fetchData("Batman");
    }, []);

    const fetchData =(title) =>{
        Api.getMovies(title)
        .then((resp)=>{
            console.log(resp);
            if (resp.data.Response==="True") {
                // console.log(resp.data);
                setMovieslist(resp.data.Search);
            } else{
            console.log(resp.data.Error);
            }
        })
        .catch((err)=>{
            console.log("error por mí".err);
        });
    };

    const CreateItems =()=>{
        return movieslist.map((movie)=>
        <ItemMovie
            Poster={movie.Poster}
            Title={movie.Title}
            Year={movie.Year}
            imdbID={movie.imdbID}
            Movie={movie.Movie}
        />);
    };
    
    return (
        <>
        <NavBar name="home"/>
         <h1>Lista de Películas</h1>
         <Segment raised>
         <Card.Group> {CreateItems()} </Card.Group>
         </Segment>
        </>
    );
};

export default MoviesList;