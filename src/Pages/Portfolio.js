import React from 'react'
import Project from '../Components/Project/Project'
import Home from './Home'

const Portfolio = () => {

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
            <>
            <Home />
            

            <div className="row" id= "portfolio-section">
            <div className = "col-sm-12">

            <Project title={"Dog Blog"} img={"/img/dogBlog.png"} alt={"Dog Blog Screenshot"} desc={"Uses Sequelize, Pug, Google Maps API, etc. to create blog geared towards dogs"} git={"https://github.com/lizlarkin/dog_blog"} deployDemo={"https://dog-blog-app.herokuapp.com/"}/>

            <Project title={"Eat Da Burger"} img={"/img/burger.png"} alt={"Eat Da Burger Screenshot"} desc={"Input and 'devour' burger types on front-end, while back end manages/stores burger data"} git={"https://github.com/lizlarkin/Burger"} deployDemo={"https://larkin-burger.herokuapp.com/"}/>

            <Project title={"Weather App"} img={"/img/weather_app.png"} alt={"Weather App"} desc={"Dynamic weather app using data from Open Weather API"} git={"https://github.com/lizlarkin/Weather_App"} deployDemo={"https://lizlarkin.github.io/Weather_App/weather.html"}/>

            <Project title={"Employee Tracker"} img={"/img/employee_tracker.png"} alt={"Employee Tracker Screenshot"} desc={"Uses Inquirer and MySQL to view and modify employee names, departments, and roles through CLI"} git={"https://github.com/lizlarkin/Employee_Tracker"} deployDemo={"https://drive.google.com/file/d/1vu2FytRgHwVs3ufPwMmMbO2_S5pKrTh-/view"}/>

            <Project title={"API Project"} img={"/img/api_project.png"} alt={"API Project Screenshot"} desc={"Uses Foundation, Open Weather API, Smarty Streets API, and COVID Now API to connect and display data"} git={"https://github.com/lizlarkin/API-Project1"} deployDemo={"https://mikefogz.github.io/API-Project1/"}/>

            <Project title={"Team Profile Generator"} img={"/img/team_generator.png"} alt={"Team Profile Generator Screenshot"} desc={"Respond to CLI prompts about professional team members to dynamically generate organizational-chart-esque HTML file"} git={"https://github.com/lizlarkin/Team_Generator"} deployDemo={"https://drive.google.com/file/d/1olxcTZ584agyRpjeaPRefrGPSD_9KNc2/view"}/>

            <Project title={"Password Generator"} img={"/img/password.png"} alt={"Password Generator Screenshot"} desc={"Automatically generate and display password based on user preferences"} git={"https://github.com/lizlarkin/Password_Generator"} deployDemo={"https://lizlarkin.github.io/Password_Generator/"}/>

            <Project title={"README Generator"} img={"/img/readme.png"} alt={"Readme Generator Screenshot"} desc={"Command-line readme guide that adds content to Markdown file"} git={"https://github.com/lizlarkin/Readme_Generator"} deployDemo={"https://drive.google.com/file/d/1RoX7FvnBukXsvjoqumeLOmcmofWSwDA6/view"}/>

            </div>
        </div>
        </>
        

    )
}

export default Portfolio
