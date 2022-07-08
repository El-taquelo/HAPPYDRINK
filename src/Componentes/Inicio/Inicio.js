import React, { useEffect } from "react";

import {Link} from "react-router-dom";

import M from "materialize-css";


function Inicio() {
  const colapsado = () => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  };

  useEffect(() => {
    colapsado();
  }, []);

  return (
    <div className="incio">
      <nav class="nav-extended light-blue darken-4">
        
        <div class="nav-wrapper">
          <a href="#" class="black-text text-darken-2 brand-logo">
            HAPPY DRINK
            <img width="50px" src="../hapy.png"></img>
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons ">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
             <li><a href="badges.html"><i class="material-icons right">account_circle</i>User</a></li>
            </li>
          </ul>
        </div>
        <form>
        <div class="colo-bar input-field">
          <input id="search" type="search" requir/>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <Link to="/Home">Home</Link>
            </li>
            <li class="tab">
              <a class="#test2" href="/Categoria">Catalogo</a>
            </li>
            <li class="tab">
              <a href="/Catalogo">Recomendados</a>
            </li>
            <li class="tab">
              <a href="#test4">Favoritos</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">JavaScript</a>
        </li>
      </ul>
    </div>
  );
}

export default Inicio;
