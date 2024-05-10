import React, { useEffect } from 'react';
import { Col, Row, Container, Alert, Button, Form } from "react-bootstrap";
import './../assets/css/Central.css';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchHoras } from "../redux/actions/horaPacienteActions.js";
import FormatoHoras from './FormatoHoras.jsx';
import Hora from './Hora.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar.jsx';
//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


function MostrarHoraPaciente(){

    const isLogged = useSelector((store) => store.authReducer.isLogged);
	const dispatch = useDispatch();
	const Horas = useSelector((store) => store.pacienteReducer.horas);

	useEffect(() => {
		if (isLogged) {
			axios
				.get("http://localhost:8080/medicalAppointmentByPatient", {
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
	}, []);


  return isLogged ? (
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
		<Navbar/>
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">Horas paciente</h3>
                </div>
				<div className="col-12 mt10">
					<div style={{ marginLeft: '500px' }}></div>
					<Form>
					<Container fluid>
						<Row>
							{Horas.map((v) => (
								<Col key={v.id} md={2}>
									<Hora id={v.id}/>
								</Col>
							))}
						</Row>
					</Container>
					</Form>
				</div>
            	</div>
			</div>
            <footer className="footer">
                © 2024 ImagenApp by <a href="https://www.wrappixel.com/">Grupo 17</a>
            </footer>
        </div>
    </div>
    
	) : (
		<Alert variant="danger">Error!, necesitas estar logeado.</Alert>
	);

};
	

		


export default MostrarHoraPaciente;