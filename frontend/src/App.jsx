import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/create" component={UserForm} />
          <Route exact path="/users/:userId/edit" component={UserForm} />
          <Route exact path="/users/:userId" component={UserDetails} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
