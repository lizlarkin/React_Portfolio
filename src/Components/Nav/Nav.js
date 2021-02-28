import React from 'react'

const Nav = () => {

    const navStyles = {
        fontWeight: "bold",
    }

    return (
        <div>
            <nav style = {navStyles} className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Liz Larkin Portfolio</span>
            </nav>
        </div>
    )
}

export default Nav
