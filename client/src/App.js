import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'; 
import './css/App.css';
import WelcomePage from './WelcomePage';
import SignupPage from './SignupPage';
import SigninPage from './SigninPage';
import HobbiesDashboard from './components/HobbiesDashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/sign-up' component={SignupPage}/>
            <Route path='/log-in' component={SigninPage}/>
            <Route path='/hobbies' component={HobbiesDashboard}/>
            <Route exact path='/' component={WelcomePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;