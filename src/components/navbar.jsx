// -----------------------------------------------------------------------------
//
// Navbar para las paginas
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//
// Fecha Inicio: 05-05-2024
//
// Fecha Ultima Modificacion: 06-05-2024
//
//
// Este código fuente representa una parte del proyecto de Analisis y Diseño de
// Software (INF-236) e Ingenieria de Software (INF-225), para mas informacion
// revisar el README en GitHub.
//
// El código fuente se distribuye con la esperanza de que sea útil,
// pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
// APTITUD PARA UN PROPÓSITO PARTICULAR.
//
//
// DESCRIPCIÓN:
// Navbar para las paginas
//
// -----------------------------------------------------------------------------

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


function navbar() {
    return (
        <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <a className="waves-effect waves-dark" href="index.html" aria-expanded="false" style={{textdecoration: 'none'}}>
                                <i className="mdi mdi-gauge"></i>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="/Usuario" aria-expanded="false" style={{textdecoration: 'none'}}>
                                <i className="mdi mdi-account-check"></i>
                                <span className="hide-menu">Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="/calendario" aria-expanded="false" style={{textdecoration: 'none'}}>
                                <i className="mdi mdi-table"></i>
                                <span className="hide-menu">Calendario</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="/mostrarhorapaciente" aria-expanded="false" style={{textdecoration: 'none'}}> 
                                <i className="mdi mdi-emoticon"></i>
                                <span className="hide-menu">Editar Hora Urgencia</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="/mostrarhorapaciente" aria-expanded="false" style={{textdecoration: 'none'}}>
                                <i className="mdi mdi-earth"></i>
                                <span className="hide-menu">Horas</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="/FormatoHoras" aria-expanded="false" style={{textdecoration: 'none'}}>
                                <i className="mdi mdi-book-open-variant"></i>
                                <span className="hide-menu">Agregar Hora</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="/personal" aria-expanded="false" style={{textdecoration: 'none'}}>
                                <i className="mdi mdi-help-circle"></i>
                                <span className="hide-menu">Estado Equipos</span>
                            </a>
                        </li>
                    </ul>
                    <div className="text-center mt-4">
                        <a href="https://wrappixel.com/templates/adminpro" className="btn waves-effect waves-light btn-info hidden-md-down text-white">
                            Cerrar Sesion
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default navbar;