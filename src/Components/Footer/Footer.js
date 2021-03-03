import React from 'react'

const Footer = () => {
    const footerStyles = {
        color: "white !important",
        marginRight: "auto !important",
        marginLeft: "auto !important"
    }
    return (
        <Footer>
        <nav className="navbar fixed-bottom navbar-light bg-dark" style={footerStyles}>
            <p id = "footer">&#169; copyright 2020</p>
        </nav>
      </Footer>
    )
}

export default Footer
