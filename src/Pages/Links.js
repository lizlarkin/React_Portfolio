import React from 'react'
import Home from './Home'

const Links = () => {

    const linkStyles = {
        border: "1px solid grey",
        boxShadow: "0px 5px 10px 0px",
        backgroundColor: "white",
        borderRadius: "7px",
        textAlign: "center",
        padding: "20px",
        marginBottom: "100px",
    }

    return (
        <div>
            <Home />
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8" id = "links-div" style={linkStyles}>
                <div className = "link">
                    <a href = "https://github.com/lizlarkin" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <div className = "link">
                    <a href = "https://www.linkedin.com/in/larkinelizabeth" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className = "link">
                    <a href = "https://www.highlandtechnology.com/" target="_blank" rel="noreferrer">Highland Technology</a>
                </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default Links
