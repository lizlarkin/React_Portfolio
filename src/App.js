import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Links from './Pages/Links';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

function App() {

  const commonStyles = {
  footerStyles: {
    color: "white",
    fontWeight: "bold",
    bottom: "0",
    width: "100%"
  },

  containerStyles: {
        backgroundImage: "url(https://img.freepik.com/free-photo/brick-wall_1154-638.jpg?size=626&ext=jpg)",
        minHeight: "100vh"
  }
}

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <div style = {commonStyles.containerStyles} class="container">

        <Switch>
          <Route path="/src/Pages/Home" component={Home} />
          <Route path="/src/Pages/About" component={About} />
          <Route path="/src/Pages/Links" component={Links} />
          <Route path="/src/Pages/Portfolio" component={Portfolio} />
          <Route path="/src/Pages/Resume" component={Resume} />
        </Switch>

        </div>

        <nav className="navbar navbar-light bg-dark justify-content-center" style={commonStyles.footerStyles}>
            <p id>&#169; copyright 2021</p>
        </nav>

      </BrowserRouter>


    </div>

  );
}

export default App;
