import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Home from './Components/Home';
import Add from './Components/Add';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import MyCourses from './Components/MyCourses';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ):(
        <div className="app_body">
          <Router>
              <NavBar/>
              <Switch>
              <Route path='/add/:courseId'>
                  <Add/>
                </Route>
                <Route path='/add'>
                  <Add/>
                </Route>
                <Route path='/mycourses'>
                  <MyCourses/>
                </Route>
                <Route path='/'>
                  <Home/>
                </Route>
              </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
