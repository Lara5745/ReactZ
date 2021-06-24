import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'; //Esto se realiza ya que no es una exportación por defecto
import Saludo from './components/Saludo';
import Contador from './components/Contador';

// ReactDOM.render( //Esto manda parametros a Saludo.js #3
//   <Saludo saludo="Hola como estas?" />, //Componente "Saludo" que manda Props a Saludo.js #3
//   document.getElementById('root'));

ReactDOM.render( //Esto manda parametros a Saludo.js #4
  <Contador  />, //Componente "Contador" que manda Props a Saludo.js #4
  document.getElementById('root'));