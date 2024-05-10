// -----------------------------------------------------------------------------
//
// Login Usuario RESPALDO
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//                   Benjamin Pavez
//
// Fecha Inicio: 10-10-2023
//
// Fecha Ultima Modificacion: 02-05-2024
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
// La pagina muestra el login del Usuario.
//
// -----------------------------------------------------------------------------

import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions.js';

//Estilos y movimientos
import './../assets/css/style_login.css';
import './../assets/js/script_login.js';

function Login() {
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginFormActive, setIsLoginFormActive] = useState(true);
    const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);
    const dispatch = useDispatch();

    const handleRut = (e) => {
        setRut(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/loginPatient', {
                rut: rut,
                password: password,
            })
            .then((data) => {
                console.log(data);
                dispatch(login());
                localStorage.setItem('token', data.headers['auth-token']);
                window.location.href = '/Central';
            })
            .catch((error) => {
                console.error('Error during login:', error);
            });
    };

	//MOVER ENTRE FORMULARIOS
    const toggleLoginForm = () => {
        setIsLoginFormActive(true);
        setIsSignUpFormActive(false); // Aquí se asegura de que al activar el formulario de inicio de sesión, se desactive el de registro
    };

    const toggleSignUpForm = () => {
        setIsLoginFormActive(false); // Aquí se asegura de que al activar el formulario de registro, se desactive el de inicio de sesión
        setIsSignUpFormActive(true);
    };

    return (
        <div
            className="container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                marginTop: '90px',
            }}
        >
            <div className="box"></div>
            <div className="container-forms">
                <div className="container-info">
                    <div className="info-item">
                        <div className="table">
                            <div className="table-cell">
                                <p>Tienes una cuenta?</p>
                                <button
                                    className="btn"
                                    onClick={toggleLoginForm}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '45px',
                                        width: '150px',
                                        border: '1px solid black',
                                    }}
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="table">
                            <div className="table-cell">
                                <p>No tienes una cuenta?</p>
                                <button
                                    className="btn"
                                    onClick={toggleSignUpForm}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '45px',
                                        width: '150px',
                                        border: '1px solid black',
                                    }}
                                >
                                    Registrate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container-form ${isLoginFormActive ? 'log-in' : ''}`}>
                    <div className="form-item">
                        <div className="table">
                            <div className="table-cell">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            onChange={handleRut}
                                            type="rut"
                                            placeholder="Ej: 12345678-9"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="password"
                                            placeholder="Contraseña"
                                        />
                                    </Form.Group>
                                </Form>
                                <button
                                    className="btn"
                                    onClick={handleSubmit}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '45px',
                                        width: '150px',
                                        border: '1px solid black',
                                    }}
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container-form ${isSignUpFormActive ? 'sign-up' : ''}`}>
                    <div className="form-item">
                        <div className="table">
                            <div className="table-cell">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            onChange={handleRut}
                                            type="rut"
                                            placeholder="Ej: 12345678-9"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="name"
                                            placeholder="Nombre"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="lastname"
                                            placeholder="Apellido"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="cump"
                                            placeholder="Ej: YYYY-MM-DD"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="allergies"
                                            placeholder="Alergias"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="fonasa"
                                            placeholder="Fonasa"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="address"
                                            placeholder="Dirrecion"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={handlePassword}
                                            type="phone"
                                            placeholder="Telefono"
                                        />
                                    </Form.Group>
                                </Form>
                                <button
                                    className="btn"
                                    onClick={handleSubmit}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '45px',
                                        width: '150px',
                                        border: '1px solid black',
                                    }}
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
