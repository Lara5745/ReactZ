/*******************************************************************************
****En este archivo se especifica que Componente y donde será renderizado #10***
********************************************************************************/

//##########Tercer paso para la creación de componentes #6

// ~~~Jerarquía de IMPORTS~~~
import React from 'react'; //~~Componentes por defecto de REACT
import ReactDOM from 'react-dom';

import {App} from './App'; //~~Componentes propios. Se usa {} ya que no es una exportación por defecto y se llama a un item específico

ReactDOM.render(<App />, document.getElementById('root')); //Se llama al componente "App". Manda hacia index.html y manda a Contador.js al mismo tiempo

