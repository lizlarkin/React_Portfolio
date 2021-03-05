import React from 'react'
import Project from '../Components/Project/Project'
import Home from './Home'
import dogBlog from "./dogBlog.png";
import burger from "./burger.png";
import weather_app from "./weather_app.png";
import employee_tracker from "./employee_tracker.png";
import api_project from "./api_project.png";
import team_generator from "./team_generator.png";
import password from "./password.png";
import readme from "./readme.png";


const Portfolio = () => {

    return (
            <>
            <Home />
            

            <div className="row" id= "portfolio-section">
            <div className = "col-sm-12">

            <Project title={"Dog Blog"} img={dogBlog} alt={"Dog Blog Screenshot"} desc={"Uses Sequelize, Pug, Google Maps API, etc. to create blog geared towards dogs"} git={"https://github.com/lizlarkin/dog_blog"} deployDemo={"https://dog-blog-app.herokuapp.com/"}/>

            <Project title={"Eat Da Burger"} img={burger} alt={"Eat Da Burger Screenshot"} desc={"Input and 'devour' burger types on front-end, while back end manages/stores burger data"} git={"https://github.com/lizlarkin/Burger"} deployDemo={"https://larkin-burger.herokuapp.com/"}/>

            <Project title={"Weather App"} img={weather_app} alt={"Weather App"} desc={"Dynamic weather app using data from Open Weather API"} git={"https://github.com/lizlarkin/Weather_App"} deployDemo={"https://lizlarkin.github.io/Weather_App/weather.html"}/>

            <Project title={"Employee Tracker"} img={employee_tracker} alt={"Employee Tracker Screenshot"} desc={"Uses Inquirer and MySQL to view and modify employee names, departments, and roles through CLI"} git={"https://github.com/lizlarkin/Employee_Tracker"} deployDemo={"https://drive.google.com/file/d/1vu2FytRgHwVs3ufPwMmMbO2_S5pKrTh-/view"}/>

            <Project title={"API Project"} img={api_project} alt={"API Project Screenshot"} desc={"Uses Foundation, Open Weather API, Smarty Streets API, and COVID Now API to connect and display data"} git={"https://github.com/lizlarkin/API-Project1"} deployDemo={"https://mikefogz.github.io/API-Project1/"}/>

            <Project title={"Team Profile Generator"} img={team_generator} alt={"Team Profile Generator Screenshot"} desc={"Respond to CLI prompts about professional team members to dynamically generate organizational-chart-esque HTML file"} git={"https://github.com/lizlarkin/Team_Generator"} deployDemo={"https://drive.google.com/file/d/1olxcTZ584agyRpjeaPRefrGPSD_9KNc2/view"}/>

            <Project title={"Password Generator"} img={password} alt={"Password Generator Screenshot"} desc={"Automatically generate and display password based on user preferences"} git={"https://github.com/lizlarkin/Password_Generator"} deployDemo={"https://lizlarkin.github.io/Password_Generator/"}/>

            <Project title={"README Generator"} img={readme} alt={"Readme Generator Screenshot"} desc={"Command-line readme guide that adds content to Markdown file"} git={"https://github.com/lizlarkin/Readme_Generator"} deployDemo={"https://drive.google.com/file/d/1RoX7FvnBukXsvjoqumeLOmcmofWSwDA6/view"}/>

            </div>
        </div>
        </>
        

    )
}

export default Portfolio
