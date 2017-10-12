import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'
import IdeaPage from './components/idea/IdeaPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/"> Home</Link>
          <div>
          </div>
            <Link to="/login"> login</Link>
          <div>
          </div>
            <Link to="/user"> user</Link>
          </div>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={IdeaPage} />
          <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


