import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Links from './Pages/Links';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

function App() {

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
        {/* <Footer /> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
