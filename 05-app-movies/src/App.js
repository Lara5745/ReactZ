//##########Segundo paso para la creación de componentes # 4,9

// ~~~Jerarquía de IMPORTS~~~
import React from 'react'; //~~Componentes por defecto de REACT

import {BrowserRouter as Router, Route} from "react-router-dom"; //~~Dependencias

import MoviesList from './components/MoviesList';  //~~Componentes propios. Se usa {} ya que no es una exportación por defecto y se llama a un item específico
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
