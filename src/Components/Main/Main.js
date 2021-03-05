import React from 'react'

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
    <img src="../img/mainLeft.png" alt="src/img/mainLeft.png"/>
  </div>


  <div className="col-sm-4" id = "main-center" style={mainHeadStyles.mainCenterStyles}>
  <img src="/img/mainCenter.png" alt="Background to hold contact info"/>
    <div id = "basic-info" style={mainHeadStyles.basicInfoStyles}></div>
  </div>

  <div className="col-sm-4" id = "main-right" style={mainHeadStyles.mainRightStyles}>
    <img src="/img/mainRight.png" alt="Liz face"/>
  </div>
</div>

</>
    )}


export default Main

