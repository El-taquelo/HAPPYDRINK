import React from 'react'
//son los elemntos que se utilizan para definir rutas
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//Se inporta el archivo Layouts para dividir las divisiones de nuestra app

import Home from '../Paginas/Home';
import Layout from '../Componentes/Layouts/Layout';
import Categoria from '../Paginas/Categoria';
import Usuario from"../Paginas/Usuario";
import Catalogo from "../Paginas/Catalogo"
import Inicio from '../Componentes/Inicio/Inicio';

function Rutas() {
  return (
      <div>
         <Router>
             <Layout/>
                 <Routes>
                     <Route exact path="/Home" element = {<Home/>}/>
                     <Route exact path='/Categoria'element={<Categoria/>}/>
                     <Route exact path="/Usuario" element={<Usuario/>}/>
                     <Route exact path="/Catalogo" element={<Catalogo/>}/>
                 </Routes>
         </Router>
      </div>
  )
}
 
export default Rutas