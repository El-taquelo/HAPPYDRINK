import React from 'react'
//son los elemntos que se utilizan para definir rutas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Se inporta el archivo Layouts para dividir las divisiones de nuestra app

import Layout from '../Componentes/Layouts/Layout';
import About from '../Paginas/Estilos/About';
import NotFound from "../Paginas/NotFound";
import Home from '../Paginas/Estilos/Home';

function Rutas() {
  return (
    <div>
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Layout>
        </Router>
    </div>
  )
}

export default Rutas