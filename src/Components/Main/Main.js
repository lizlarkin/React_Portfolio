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

        mainLeftStyles: {
            backgroundImage: "url('main-left.png')",
            backgroundRepeat: "no-repeat",
        },

        mainCenterStyles: {
            backgroundImage: "url('src/assets/main-center.png')",
            backgroundRepeat: "no-repeat",
        },

        mainRightStyles: {
            backgroundImage: "url('../assets/main-right.png')",  
            backgroundRepeat: "no-repeat",
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
  <div class="col-sm-4" id = "main-left" style={mainHeadStyles.mainLeftStyles}></div>
  <div class="col-sm-4" id = "main-center" style={mainHeadStyles.mainCenterStyles}>
    <div id = "basic-info" style={mainHeadStyles.basicInfoStyles}>
    <h1>Liz Larkin</h1>
    <h4>San Francisco, CA</h4>
    <h4>enlarkin@gmail.com</h4>
    <h4>415-551-1700</h4>
    </div>
  </div>
  <div class="col-sm-4" id = "main-right" style={mainHeadStyles.mainRightStyles}>

  </div>
</div>
</div>
</>
    )}


export default Main

