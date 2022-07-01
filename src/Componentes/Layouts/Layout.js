import React from 'react'

import Menu from '../Menu/Menu';
import Footer from '../Menu/Footer';

import './Layout.css';


function Layout({Children}) {
  return (
    <div>
        <Menu/>
        {Children}
        <Footer/>
    </div>
  )
}
export default Layout