import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/App.css';
import Logo from './css/DS_logo.png';
import 'semantic-ui-css/semantic.min.css'; 
import axios from 'axios';

class SigninPage extends Component{
    state = {
        username: '',
        password: ''
    }

    componentDidMount(){
        console.log(this.props);
    }

    logUserIn = (e)=>{
        e.preventDefault();
        axios.post('/api/signup',{username:this.state.username,
                                                        password: this.state.password
                                                    }).then((res)=>{
        console.log(res.data)
        this.props.history.replace('/hobbies')
        console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
    }
    render(){
        return(
                <div className="App cover">
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
                    <h1 className="ui dividing centered App-title">Ds Hobby App</h1>
                    <div className="signin-page">
                        <div>
                            <h5>New Here? &nbsp; &nbsp; <Link to="/sign-up">Sign Up</Link> </h5>
                        </div>
                        <div className="signup-Page ui centered card">
                            <form className="ui form" onSubmit={this.logUserIn}>
                            <div className="field left aligned required">
                                <label>Username</label>
                                <input placeholder="Username" maxLength="10"
                                onChange={(e) => this.setState({username: e.target.value})}
                                required={true}/>
                            </div>
                                <div className="field left aligned required">
                                    <label>Password</label>
                                    <div className="ui input">
                                    <input type="password" placeholder="*******" maxLength="10"/>
                                    </div>
                                </div>

                                <button type="submit" className="ui floating button">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default SigninPage;