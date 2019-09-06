import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Student from './components/create.student';
import StudentView from './components/index.student';
import EditStudent from './components/edit.student';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React App </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Add Business</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/business'} className="nav-link">View Business</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/addstudents'} className="nav-link">Add Student</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/students'} className="nav-link">View Students</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/business' component={ Index } />
              <Route path='/addstudents' component={ Student } />
              <Route path='/students' component={ StudentView } />
              <Route path='/student/edit/:id' component={ EditStudent }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;