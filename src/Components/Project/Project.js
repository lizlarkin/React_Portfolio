import React from 'react'

const Project = (props) => {

    const portfolioStyles = {
        projectTitle: {
            color: "#60a3bc",
        },

        projectDesc: {
            marginTop: "25px",
            textAlign: "left"
        },

        projectRow: {
            border: "1px solid grey",
            boxShadow: "0px 5px 10px 0px",
            backgroundColor: "white",
            borderRadius: "7px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "100px",
            height: "250px",
        },

        projectPicture: {
            marginLeft: "100px",
        }
    }

    return (
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10 project-row" style={portfolioStyles.projectRow}>
            <h3 style={portfolioStyles.projectTitle}>{props.title}</h3>
            <div className = "row">
            <div className = "col-sm-5">
            <img src={props.img} alt={props.alt}/>
            
            </div>
            <div className = "col-sm-5 right" style={portfolioStyles.projectPicture}>
            <h6 style={portfolioStyles.projectDesc}> {props.desc} </h6>
            <div className = "link">
                <a href = {props.git} target="_blank" rel="noreferrer">GitHub Repository</a>
            </div>
            <div className = "link">
                <a href = {props.deployDemo} target="_blank" rel="noreferrer">Deployed/Demo Link</a>
            </div>
            </div>
        </div>
        </div>
        <div className="col-sm-1"></div>
    </div>
    )
}

export default Project
