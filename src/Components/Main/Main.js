import React from 'react'
import mainLeft from "./mainLeft.png";
import mainCenter from "./mainCenter.png";
import mainRight from "./mainRight.png";

const Main = () => {

    const mainHeadStyles = {
        backgroundStyles: {
            backgroundImage: "url(https://img.freepik.com/free-photo/brick-wall_1154-638.jpg?size=626&ext=jpg)",
            minHeight: "100%",
        },

        mainRowStyles: {
            height: "500px"
        },

        }
    
    return (
<>


{/* <!-- Basic Information Row --> */}
<div className="row" id = "main-row" style={mainHeadStyles.mainRowStyles}>

  <div className="col-sm-4" id = "main-left" style={mainHeadStyles.mainLeftStyles}>
    <img src={mainLeft} alt="Wedding Day"/>
  </div>


  <div className="col-sm-4" id = "main-center" style={mainHeadStyles.mainCenterStyles}>
    <img src={mainCenter} alt="Information"/>
    <div id = "basic-info" style={mainHeadStyles.basicInfoStyles}></div>
  </div>

  <div className="col-sm-4" id = "main-right" style={mainHeadStyles.mainRightStyles}>
    <img src={mainRight} alt="Liz Face"/>
  </div>
</div>

</>
    )}


export default Main

