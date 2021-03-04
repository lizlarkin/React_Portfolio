import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Links from './Pages/Links';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

function App() {

  const footerStyles = {
    color: "white",
    fontWeight: "bold"
}


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
 
        <Switch>
          <Route path="/src/Pages/Home" component={Home} />src\Pages\Home.js
          <Route path="/src/Pages/About" component={About} />
          <Route path="/src/Pages/Links" component={Links} />
          <Route path="/src/Pages/Portfolio" component={Portfolio} />
          <Route path="/src/Pages/Resume" component={Resume} />
        </Switch>

        <nav className="navbar navbar-light bg-dark justify-content-center" style={footerStyles}>
            <p id = "footer" style={footerStyles.pStyles}>&#169; copyright 2020</p>
        </nav>

      </BrowserRouter>


    </div>
  );
}

export default App;
