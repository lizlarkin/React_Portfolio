import React from 'react'
import Main from '../Components/Main/Main'

const About = () => {

    const aboutStyles = {
        border: "1px solid grey",
        boxShadow: "0px 5px 10px 0px",
        backgroundColor: "white",
        borderRadius: "7px",
        padding: "20px",
        marginBottom: "100px"
    }

    return (
        <div>
            <h1>About</h1>
            <Main />
            <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8" id = "about-div" style={aboutStyles}>
                <p>
                  I was born and raised in San Francisco, CA. I'm a graduate of St. Ignatius College Prep High School, I have a BA from Cornell University, and I have an MBA from UC Berkeley Haas School of Business.
                </p>
                <p>
                  Descending from generations of unathletic ancestors, I rebelled by following and playing sports. I played for and captained the Cornell Varsity Women's Softball Team. Now I like to spend any free time I can find on the golf course or watching my favorite local teams. 
                </p>
                <p>
                  In 2018 I married my husband Aaron in Lake Tahoe. 
                </p>
                <p>
                  I have twice thrown out the ceremonial first pitch at an Oakland A's game -- each time dressed like Elmo.
                </p>
                <img src="/img/elmo1.jpg" alt="Elmo" id = "elmo-picture"/>
            </div>
            <div className="col-sm-2"></div>
        </div> 
        </div>
    )
}

export default About
