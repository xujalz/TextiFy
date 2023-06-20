import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {

    return (
        <>
        <nav className={`navbar px-2 navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand text-warning" to="/">
                   <strong><i>{props.title}</i></strong> 
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'secondary'?'light':'light'}`}>
                        <input className="form-check-input mt-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label> */}
                        <img src={`${props.mode === 'secondary'?'moon.png':'brightness.png'}`} height='25px' alt="" />
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

Navbar.propTypes={
    title: PropTypes.string.isRequired
};

