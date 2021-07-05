/*******************************************************************************
****En este archivo se especifica que Componente y donde será renderizado #21***
********************************************************************************/

// ~~~Jerarquía de IMPORTS~~~

import React from 'react'; //~~Componentes por defecto de REACT
import ReactDOM from 'react-dom';

import {App} from './App'; //~~Componentes propios. Se usa {} ya que no es una exportación por defecto y se llama a un item específico
import Saludo from './components/Saludo';
import Contador from './components/Contador';

// ReactDOM.render( //Esto manda parametros a Saludo.js #3
//   <Saludo saludo="Hola como estas?" />, //Componente "Saludo" que manda Props a Saludo.js #3
//   document.getElementById('root'));

ReactDOM.render( //Esto manda parametros a Saludo.js #4
  <Contador numero={5} />, //Se llama al componente "Contador" y se le puede mandar Props a Contador.js #4. Manda hacia index.html y manda a Contador.js al mismo tiempo
  document.getElementById('root')); // Etiqueta dentro de index.html donde será mostrado el componente  renderizado

  // ReactDOM.render(<Contador  />,document.getElementById('root')); //Forma normal