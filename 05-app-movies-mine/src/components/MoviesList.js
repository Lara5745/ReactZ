//Primer paso para la creación de componentes *
import React, { useState,useEffect } from 'react';

import Api from '../utils.js/Api';

import NavBar from './NavBar';

import ItemMovie from './ItemMovie';
import { Card,Segment } from 'semantic-ui-react';

const MoviesList=()=> {

    const [movieslist, setMovieslist] = useState([]);
    let peli = prompt("Qué película quieres?");
    useEffect(() => {
        fetchData(peli);
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