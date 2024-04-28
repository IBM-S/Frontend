import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import InfoDia from "./components/InfoDia";
import EventsCalendar from "./components/Calendario";
import Usuario from "./components/Usuario";
import Login from "./components/Login";
import Central from './components/Central';
import FormatoHoras from './components/FormatoHoras';
import Personal from './components/Personal';
import Pruebas from './components/Pruebas';

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

import "./assets/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/FormatoHoras" Component={FormatoHoras} />
        <Route path="/central/:id" Component={Central} />
        <Route path="/login" Component={Login} />
        <Route path="/infodia" Component={InfoDia}/>
        <Route path="/usuario/" Component={Usuario}/>
        <Route path="/Pruebas/" Component={Pruebas}/>
        <Route path="/personal/" Component={Personal}/>
        <Route path="/calendario" element={<EventsCalendar />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
