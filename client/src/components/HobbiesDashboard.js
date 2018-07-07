import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/App.css';
import Logo from '../css/DS_logo.png';
import EditableHobbyList from './EditableHobbyList';
import ToggleableHobbyForm from './ToggleableHobbyForm';
import axios from 'axios'

class HobbiesDashboard extends Component {

  state = {
    hobbies: [],
  };

  getInitialState= ()=> {
    return {
      hobbies: [
      ],
    };
  };

  componentDidMount=()=> {
    axios.get('/api/hobbies')
    .then(res => {
      console.log('this.componentDidMount')
      this.setState({hobbies: res.data});
    }
    );
  };

  handleSaveFormSubmit=(hobby)=>{
    this.saveHobby(hobby);
  };

  render() {
    return (
        <div className="App cover">
          <header>
              <div className="header">
                <Link id="app-logo" to="/"><img src={Logo} className="App-logo" alt="logo" /></Link>
                <div className="header-right">
                  <div className="ui secondary menu">
                    <Link to="/" className="ui active item primary active-link">Logout</Link>
                  </div>
                </div>
              </div> 
            </header>
          <h1 className="ui dividing centered App-title">Ds Hobby App</h1>
          <div className='ui column centered grid dashboard'>
            <div className='column'>
              <EditableHobbyList
                hobbies={this.state.hobbies}
                onFormSubmit={this.handleSaveFormSubmit}
                onTrashClick={this.handleTrashClick}
              />
              <ToggleableHobbyForm
                onFormSubmit={this.handleSaveFormSubmit}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default HobbiesDashboard;
