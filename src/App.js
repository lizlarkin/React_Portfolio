import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import About from './Components/Pages/About';
import Links from './Components/Pages/Links';
import Portfolio from './Components/Pages/Portfolio';
import Resume from './Components/Pages/Resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/Links" component={Links} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Resume" component={Resume} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
