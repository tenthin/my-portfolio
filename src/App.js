import './App.css';
import MyName from './components/MyName';
import Contact from './components/Contact';
import Project from './components/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './components/AboutMe';


function App() {
  return (
    <Router>
      <div>
        <MyName/>
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
        <AboutMe/>
      </div>
    </Router>
  );
}

export default App;
