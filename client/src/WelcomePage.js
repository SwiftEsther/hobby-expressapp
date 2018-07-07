import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './css/DS_logo.png';
import './css/welcomePage.css';
import './css/App.css';
import 'semantic-ui-css/semantic.min.css'; 

class WelcomePage extends Component {
    render() {
      return (
        <div className="welcome-page">
          <header>
            <div className="header">
              <Link id="app-logo" to="/"><img src={Logo} className="App-logo" alt="logo" /></Link>
              <div className="header-right">
                <div className="ui secondary menu">
                  <Link to="/sign-up" className="ui active item primary active-link">Sign Up</Link>
                  <Link to="/log-in" className="item">Log In</Link>
                </div>
              </div>
            </div> 
          </header>
        </div>
      );
    }
  }

export default WelcomePage;