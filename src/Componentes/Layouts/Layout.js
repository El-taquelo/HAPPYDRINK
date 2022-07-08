import React from 'react'

import Inicio from '../Inicio/Inicio';
import Footer from '../Inicio/Footer';


function Layout({Children}) {
  return (
    <div>
        <Inicio/>
        {Children}
    </div>
  )
}
export default Layout