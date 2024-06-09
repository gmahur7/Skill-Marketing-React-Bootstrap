import { Button } from 'bootstrap'
import React from 'react'
import { NavLink } from 'react-bootstrap'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color py-5 pt-lg-5">
            <div className="container">
                <NavLink className="navbar-brand" to="#">Skill Marketing</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar