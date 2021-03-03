import React from 'react'

const Portfolio = () => {

    const portfolioStyles = {
        projectTitle: {
            color: "#60a3bc",
        },

        projectDesc: {
            marginTop: "25px",
            textAlign: "left"
        },
    }
    return (
        <>
        <div className="row" id= "portfolio-section">
        <div className = "col-sm-12">

        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 project-row">
                <h3 style={portfolioStyles.projectTitle}>Dog Blog</h3>
                <div className = "row">
                <div className = "col-sm-5">
                  <img src="/img/dogBlog.png" alt="Dog Blog Screenshot"/>
                </div>
                <div className = "col-sm-5 right">
                  <h6> Uses Sequelize, Pug, Google Maps API, etc. to create blog geared towards dogs </h6>
                  <div className = "link">
                    <a href = "https://github.com/lizlarkin/dog_blog" target="_blank">GitHub Repository</a>
                  </div>
                  <div className = "link">
                    <a href = "https://dog-blog-app.herokuapp.com/" target="_blank">Deployed Link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 project-row">
              <h3>Eat Da Burger</h3>
              <div className = "row">
              <div className = "col-sm-5">
                <img src="/img/burger.png" alt="Eat Da Burger Screenshot"/>
              </div>
              <div className = "col-sm-5 right">
                <h6> Input and "devour" burger types on front-end, while back end manages/stores burger data </h6>
                <div className = "link">
                  <a href = "https://github.com/lizlarkin/Burger" target="_blank">GitHub Repository</a>
                </div>
                <div className = "link">
                  <a href = " https://larkin-burger.herokuapp.com/" target="_blank">Deployed Link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10 project-row">
                  <h3>Weather App</h3>
                  <div className = "row">
                  <div className = "col-sm-5">
                      <img src="/img/weather_app.png" alt="Weather App"/>
                  </div>
                  <div className = "col-sm-5 right">
                    <h6> Dynamic weather app using data from Open Weather API </h6>
                    <div className = "link">
                      <a href = "https://github.com/lizlarkin/Weather_App" target="_blank">GitHub Repository</a>
                    </div>
                    <div className = "link">
                      <a href = "https://lizlarkin.github.io/Weather_App/weather.html" target="_blank">Deployed Link</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 project-row">
              <h3>Employee Tracker</h3>
              <div className = "row">
              <div className = "col-sm-5">
                <img src="/img/employee_tracker.png" alt="Employee Tracker Screenshot"/>
              </div>
              <div className = "col-sm-5 right">
                <h6> Uses Inquirer and MySQL to view and modify employee names, departments, and roles through CLI </h6>
                <div className = "link">
                  <a href = "https://github.com/lizlarkin/Employee_Tracker" target="_blank">GitHub Repository</a>
                </div>
                <div className = "link">
                  <a href = "https://drive.google.com/file/d/1vu2FytRgHwVs3ufPwMmMbO2_S5pKrTh-/view" target="_blank">Demo Video</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 project-row">
              <h3>API Project</h3>
              <div className = "row">
              <div className = "col-sm-5">
                <img src="/img/api_project.png" alt="API Project Screenshot"/>
              </div>
              <div className = "col-sm-5 right">
                <h6> Uses Foundation, Open Weather API, Smarty Streets API, and COVID Now API to connect and display data </h6>
                <div className = "link">
                  <a href = "https://github.com/lizlarkin/API-Project1" target="_blank">GitHub Repository</a>
                </div>
                <div className = "link">
                  <a href = "https://mikefogz.github.io/API-Project1/" target="_blank">Deployed Link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 project-row">
              <h3>Team Profile Generator</h3>
              <div className = "row">
              <div className = "col-sm-5">
                <img src="/img/team_generator.png" alt="Team Profile Generator Screenshot"/>
              </div>
              <div className = "col-sm-5 right">
                <h6> Respond to CLI prompts about professional team members to dynamically generate organizational-chart-esque HTML file </h6>
                <div className = "link">
                  <a href = "https://github.com/lizlarkin/Team_Generator" target="_blank">GitHub Repository</a>
                </div>
                <div className = "link">
                  <a href = "https://drive.google.com/file/d/1olxcTZ584agyRpjeaPRefrGPSD_9KNc2/view" target="_blank">Demo Video</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 project-row">
              <h3>Password Generator</h3>
              <div className = "row">
              <div className = "col-sm-5">
                <img src="/img/password.png" alt="Password Generator Screenshot"/>
              </div>
              <div className = "col-sm-5 right">
                <h6> Automatically generate and display password based on user preferences </h6>
                <div className = "link">
                  <a href = "https://github.com/lizlarkin/Password_Generator" target="_blank">GitHub Repository</a>
                </div>
                <div className = "link">
                  <a href = "https://lizlarkin.github.io/Password_Generator/" target="_blank">Deployed Link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 project-row">
              <h3>README Generator</h3>
              <div className = "row">
              <div className = "col-sm-5">
                <img src="/img/mainLeft.png" alt="Liz, Aaron, Donner wedding"/>
              </div>
              <div className = "col-sm-5 right">
                <h6> Command-line readme guide that adds content to Markdown file </h6>
                <div className = "link">
                  <a href = "https://github.com/lizlarkin/Readme_Generator" target="_blank">GitHub Repository</a>
                </div>
                <div className = "link">
                  <a href = "https://drive.google.com/file/d/1RoX7FvnBukXsvjoqumeLOmcmofWSwDA6/view" target="_blank">Demo Video</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

        </div>
      </div>
      </>
    )
}

export default Portfolio
