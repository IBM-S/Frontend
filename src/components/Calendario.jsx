// -----------------------------------------------------------------------------
//
// Calendario de eventos
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//                   Benjamin Pavez
//
// Fecha Inicio: 10-10-2023
//
// Fecha Ultima Modificacion: 27-11-2023
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
// La pagina muestra el calendario con el detalle de las citas programadas 
// para tal dia.
//
// -----------------------------------------------------------------------------

import React, { useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import Navbar from './navbar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchHoras } from "../redux/actions/horaPacienteActions";

//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';

require('moment/locale/es.js');

const localizer = momentLocalizer(moment);

function EventsCalendar() {
    const dispatch = useDispatch();
    const isLogged = useSelector((store) => store.authReducer.isLogged);
    const horas = useSelector((store) => store.pacienteReducer.horas);

    // Realizar la solicitud para obtener los datos de las citas médicas
    useEffect(() => {
        if (isLogged) {
            axios.get("http://localhost:8080/medicalAppointmentByPatient", {
                headers: {
                    "auth-token": localStorage.getItem("token"),
                },
            })
            .then((data) => {
                console.log(data);
                dispatch(fetchHoras(data.data));
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [isLogged, dispatch]);

    // Transformar los datos de citas médicas en eventos para el calendario
    const eventos = horas.map((hora) => ({
        title: hora.exam_type || "Cita médica",
        start: new Date(hora.date + 'T' + hora.start_time),
        end: new Date(hora.date + 'T' + hora.end_time),
    }));

    // Manejar el clic en un evento del calendario
    const handleEventClick = (event) => {
        // Formatear la fecha en formato ddmmaaaa
        const formattedDate = moment(event.start).format('DDMMYYYY');
        // Redirigir usuario a la página de la cita con la fecha formateada
        window.location.href = `/infodia/${formattedDate}`;
    };

    return (
        <div className="fix-header card-no-border fix-sidebar">
            <div className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <b>
                                <img src={require("./../assets/profile/assets/images/favicon.png")} alt="homepage" className="dark-logo" />
                            </b>
                            <span>
                                <img src={require("./../assets/profile/assets/images/logo-text.png")} alt="homepage" className="dark-logo" />
                            </span>
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark">
                                    <i className="ti-menu"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav my-lg-0">
                            <li className="nav-item hidden-xs-down search-box">
                                <a className="nav-link hidden-sm-down waves-effect waves-dark">
                                    <i className="ti-search"></i>
                                </a>
                                <form className="app-search">
                                    <input type="text" className="form-control" placeholder="Search & enter" />
                                    <a className="srh-btn">
                                        <i className="ti-close"></i>
                                    </a>
                                </form>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-dark" href="#">
                                    <img src={require("./../assets/profile/assets/images/users/doctor.jpg")} alt="user" className="profile-pic" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Navbar />
            <div className="page-wrapper">
                <div className="container-fluid" style={{ backgroundColor: '#F4F6F9' }}>
                    <div className="row page-titles" style={{ backgroundColor: '#F4F6F9' }}>
                        <div className="col-md-5 align-self-center" style={{ backgroundColor: '#F4F6F9' }}>
                            <h3 className="text-themecolor">Calendario</h3>
                        </div>
                    </div>
                    <div style={{ height: '720px', backgroundColor: '#F4F6F9' }} className="bigCalendar-container">
                        <BigCalendar
                            localizer={localizer}
                            events={eventos}
                            startAccessor="start"
                            endAccessor="end"
                            messages={{
                                next: "sig",
                                previous: "ant",
                                today: "Hoy",
                                month: "Mes",
                                week: "Semana",
                                day: "Dia"
                            }}
                            onSelectEvent={handleEventClick}
                        />
                    </div>
                </div>
                <footer className="footer">
                    © 2024 ImagenApp by <a href="https://www.wrappixel.com/">Grupo 17</a>
                </footer>
            </div>
        </div>
    );
}

export default EventsCalendar;
