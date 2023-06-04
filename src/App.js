import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Home from './components/views/Home';
import Nosotros from './components/views/Nosotros';
import Servicios from './components/views/Servicios';
import Distribucion from './components/views/Distribucion';
import Contacto from './components/views/Contacto';
import Error from './components/views/Error';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/nosotros' element={<Nosotros></Nosotros>}></Route>
        <Route exact path='/servicios' element={<Servicios></Servicios>}></Route>
        <Route exact path='/distribucion' element={<Distribucion></Distribucion>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='*' element={<Error></Error>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;