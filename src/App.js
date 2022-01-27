import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Project from './components/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <AboutMe/>
         <div className='link'>
          <Link to="/contact">Contact</Link>
          <Link to="/project">Project</Link>
        </div> 
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
        </Switch>
     
      </div>
    </Router>
  );
}

export default App;
