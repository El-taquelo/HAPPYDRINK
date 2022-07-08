import React, {useState, useEffect} from 'react';

function Home() {
  const variablesInicio = {
    Correo:"",
    Confirmar:"",
    Contraseña:"",
  };

  const[values, setValues]= useState(variablesInicio);

  const CambioEstado = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value });
  };

  const Enviar = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div class="row">
        <div class="col s12 m12 blue">
          <div class="card white darken-">
            <div class="card-content black-text">
              <span class="card-title">iniciar sesion con correo</span>
              <div class="row">
                <form class="col s12">
                  <div class="row">

                    <div class="input-field col s6">
                      <input id="first_name" type="text" class="validate"/>
                      <label for="first_name">Introduce correo</label>
                    </div>
                    

                    <div class="input-field col s6">
                      <input id="last_email" type="text" class="validate" />
                      <label for="last_email">Confirmar correo</label>
                    </div>

                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                  </div>
                </form>
              </div>
              <button class="btn waves-effect waves-light" type="submit">Enviar</button>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn">
                <i class="material-icons left"></i>Crear cuenta</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home