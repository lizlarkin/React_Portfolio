import React from 'react'

const Home = () => {
    return (
<>

<div class="container">
{/* <!-- Basic Information Row --> */}
<div class="row" id = "main-row">
  <div class="col-sm-4" id = "main-left">
      {/* <!-- <img src="assets/wedding.jpg" alt="wedding picture" id ="left-picture"> --> */}
  </div>
  <div class="col-sm-4" id = "main-center">
    <div id = "basic-info">
    <h1>Liz Larkin</h1>
    <h4>San Francisco, CA</h4>
    <h4>enlarkin@gmail.com</h4>
    <h4>415-551-1700</h4>
    </div>
  </div>
  <div class="col-sm-4" id = "main-right">

  </div>
</div>
{/* <!-- Buttons Row --> */}
<div class="row" id = "button-row">
    <div class="col-sm-3">
        <button id = "about-button">About</button>
    </div>
    <div class="col-sm-3">
        <button id = "resume-button">Resume</button>
    </div>
    <div class="col-sm-3">
        <button id = "portfolio-button">Portfolio</button>
    </div>
    <div class="col-sm-3">
        <button id = "links-button">Links</button>
    </div>
</div>
</div>
</>
    )
}

export default Home
