import React from 'react'
import Home from './Home'
import resumePDF from "./Elizabeth-Larkin-Resume.pdf";


const Resume = () => {

    const resumeStyles = {
        mainContainer: {
            border: "1px solid grey",
            boxShadow: "0px 5px 10px 0px",
            backgroundColor: "white",
            borderRadius: "7px",
            marginBottom: "100px",
            textAlign: "left",
        },

        header: {
            paddingTop: "15px",
            textAlign: "center",
        },

        heading: {
            paddingTop: "10px",
        },

        dates: {
            float: "right",
        }
    }

    return (
        <div>
            <Home />
            <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8" id = "resume-div" style={resumeStyles.mainContainer}>
              <div id = "resume-header" style={resumeStyles.header}>
                <h4>Elizabeth Larkin</h4>
                <h6>enlarkin@gmail.com</h6>
                <h6>415-551-1700</h6>
                <h6>San Francisco, CA</h6>
                <a href={resumePDF}>Download PDF Resume Here</a>  
              </div>
              <div className = "resume-heading" style={resumeStyles.heading}>
                <h6>Highland Technology, Inc. <span className = 'dates' style={resumeStyles.dates}>2008-present</span></h6>
              </div>
              <div className = "resume-content"></div>
              <p>Vice President <span className = 'dates' style={resumeStyles.dates}>2016-present</span></p>
              <ul>
                <li>Direct company business and finance activities</li>
                <li>Oversee manufacturing, quality control, and test operations to ensure timely, reliable, and efficient production of merchandise </li>
                <li>Define, implement, and maintain operational systems including internal quality management, material control, and manufacturing phase tracking systems</li>
                <li>Author policies and procedures in conjunction with human resources and electronic manufacturing industry best practices</li>
                <li>Run sales department, including price setting, client relationship management, and data processing </li>
                <li>Plan and implement marketing campaigns including budget allocations and supplier management</li>
                <li>Liaise with engineering department to align hardware, software, and mechanical release schedules with customer and executive expectations</li>
                <li>Maintain company library to safeguard consistency and clarity of internal and external records using version control practices based on military documentation control standards</li>
                <li>Establish data collection and parsing structures to make operational and strategic forecasts that guide product definition, sourcing, and planning decisions</li>
              </ul>
              <p>Website developer and administrator <span className = 'dates' style={resumeStyles.dates}>2010-present</span></p>
              <ul>
                <li>Design and maintain external company website front-end to showcase core competencies and product catalog</li>
                <li>Partition product lines and capabilities to provide clean user interface to visitors from various sectors</li>
                <li>Oversee analytics and pay-per-click campaigns to increase search rankings, draw relevant traffic, boost visitor duration, and collect informative user data</li>
                <li>Maintain and document in-house server to manage employee access to internal materials</li>
                <li>Languages include HTML, CSS, and JavaScript </li>
              </ul>
              <p>Design Engineer	 <span className = 'dates' style={resumeStyles.dates}>2009-2016</span></p>
              <ul>
                <li>Define the physical arrangement of electronic components and connections on printed circuit boards, optimizing layouts for speed, signal integrity, aesthetics, and manufacturability</li>
                <li>Generate fabrication instructions, bills of materials, assembly drawings, and release documentation </li>
                <li>Identify and document procedures to minimize errors and standardize content and file structures</li>
              </ul>
              <div className = "resume-heading" style={resumeStyles.heading}>
                <h6>Education </h6>
              </div>
              <div className = "resume-content"></div>
              <p>Cornell University <span className = 'dates' style={resumeStyles.dates}>2004-2008</span></p>
              <ul>
                <li>Bachelor of Arts, Psychology</li>
              </ul>
              <p>UC Berkeley Haas School of Business	 <span className = 'dates' style={resumeStyles.dates}>2015-2017</span></p>
              <ul>
                <li>Master of Business Administration</li>
              </ul>
              <p>Columbia School of Business Executive Education<span className = 'dates' style={resumeStyles.dates}>Winter 2020</span></p>
              <ul>
                <li>Certificate of participation, Python for Managers</li>
              </ul>
              <p>UC Berkeley Extension Full Stack Developer Bootcamp<span className = 'dates' style={resumeStyles.dates}>2020-Present</span></p>
              <ul>
                <li>Certificate of Completion in progress</li>
              </ul>
              <div className = "resume-heading" style={resumeStyles.heading}>
                <h6>Activities </h6>
              </div>
              <div className = "resume-content"></div>
              <p>Youth Softball Coach  </p>
              <ul>
                <li>Rooftop Alternative Middle School <span className = 'dates' style={resumeStyles.dates}>2008-2014</span></li>
                <li>Raoul Wallenberg Traditional High School <span className = 'dates' style={resumeStyles.dates}>2010</span></li>
                <li>The Urban High School of San Francisco <span className = 'dates' style={resumeStyles.dates}>2011-2014</span></li>
              </ul>
              <p>Cornell Varsity Softball Team <span className = 'dates' style={resumeStyles.dates}>2004-2008</span> </p>
              <ul>
                <li>Team captain  <span className = 'dates' style={resumeStyles.dates}>2007-2008</span></li>
                <li>Recipient of Cornell Softball Unsung Hero Award <span className = 'dates' style={resumeStyles.dates}>2008</span></li>
              </ul>
              <p>Member of Pi Beta Phi, New York Delta Chapter <span className = 'dates' style={resumeStyles.dates}>2005-2008</span> </p>
              <p>Avid skier, golfer, and Giants/49ers fan</p>
             
            </div>
            <div className="col-sm-2"></div>
      </div>
        </div>
    )
}

export default Resume
