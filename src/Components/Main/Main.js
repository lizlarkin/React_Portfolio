import React from 'react'
// import mainCenter from '../../public/img/mainCenter.png'  

const Main = () => {

    const mainHeadStyles = {
        backgroundStyles: {
            backgroundImage: "url(https://img.freepik.com/free-photo/brick-wall_1154-638.jpg?size=626&ext=jpg)",
            minHeight: "100%",
        },

        mainRowStyles: {
            height: "500px"
        },

        basicInfoStyles: {
            marginTop: "225px",
            textAlign: "center",
            color: "#3c6382",
        },

        }
    
    return (
<>

<div style = {mainHeadStyles.backgroundStyles} class="container">
{/* <!-- Basic Information Row --> */}
<div class="row" id = "main-row" style={mainHeadStyles.mainRowStyles}>

  <div class="col-sm-4" id = "main-left" style={mainHeadStyles.mainLeftStyles}>
    <img src="/img/mainLeft.png" alt="Liz, Aaron, Donner wedding picture"/>
  </div>


  <div class="col-sm-4" id = "main-center" style={mainHeadStyles.mainCenterStyles}>
  <img src="/img/mainCenter.png" alt="Background Image to hold contact info"/>
    <div id = "basic-info" style={mainHeadStyles.basicInfoStyles}></div>
  </div>

  <div class="col-sm-4" id = "main-right" style={mainHeadStyles.mainRightStyles}>
    <img src="/img/mainRight.png" alt="Liz face picture"/>
  </div>
</div>
</div>
</>
    )}


export default Main

