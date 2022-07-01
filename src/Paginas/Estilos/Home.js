import React, { useState, useEffect } from "react";

function Home() {
  const variablesInicio = {
    nombre: "",
    apellidos: "",
    telefono: "",
  };

  const [values, setValues] = useState(variablesInicio);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const Enviar = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            HAPPY DRINK
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="#test1">Categoria</a>
            </li>
            <li class="tab">
              <a class="active" href="#test2">Recomendados</a>
            </li>
            <li class="tab disabled">
              <a href="#test3">Disabled Tab</a>
            </li>
            <li class="tab">
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

export default Home;
