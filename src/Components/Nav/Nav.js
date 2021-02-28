import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {

    const navStyles = {
        fontWeight: "bold",

        linkStyles: {
            marginLeft: "100px",
        },
    }

    return (
        <div>
            <nav style = {navStyles} className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Liz Larkin Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li style={navStyles.linkStyles} className="nav-item">
                                <Link to="/About">About</Link>
                            </li>
                            <li style={navStyles.linkStyles} className="nav-item">
                                <Link to="/Resume">Resume</Link>
                            </li>
                            <li style={navStyles.linkStyles} className="nav-item">
                                <Link to="/Portfolio">Portfolio</Link>
                            </li>
                            <li style={navStyles.linkStyles} className="nav-item">
                                <Link to="/Links">Links</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
