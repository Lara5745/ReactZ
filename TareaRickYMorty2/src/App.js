//##########Segundo paso para la creación de componentes # 4,9

// ~~~Jerarquía de IMPORTS~~~
import React from 'react'; //~~Componentes por defecto de REACT

import MoviesList from './components/MoviesList';  //~~Componentes propios. Se usa {} ya que no es una exportación por defecto y se llama a un item específico

import 'semantic-ui-css/semantic.min.css';

export const App = () => {
  return (
  <>
    <MoviesList />
  </>
  );
};
