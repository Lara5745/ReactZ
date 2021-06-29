//Segundo paso para la creación de componentes # 4,9
import React from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";

import MoviesList from './components/MoviesList';
import MoviesFavs from './components/MoviesFavs';

import 'semantic-ui-css/semantic.min.css';

export const App = () => {
  return (
  <>
    <Router>
      <Route path="/" exact component={MoviesList}></Route> {/*path= Nombre que queramos para el url; exact=Para que solo muestre el compoennte especificado; componente=El componente especificado*/}
      <Route path="/favs" exact component={MoviesFavs}></Route> {/*Tanto esta linea como la de arriba se usan en NavBar.js #14 */}
    </Router>
  </>
  );
};
