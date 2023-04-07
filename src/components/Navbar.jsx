import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand text-primary" href="#">Edgar dev</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-primary" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;