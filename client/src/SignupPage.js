import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/App.css';
import Logo from './css/DS_logo.png';
import 'semantic-ui-css/semantic.min.css'; 
import axios from 'axios';

class SignupPage extends Component{

    state = {
        username: '',
        password: '',
        email: '',
        phoneNumber: ''
    }

    componentDidMount(){
        console.log(this.props);
    }

    handleAddUser = (e)=>{
        e.preventDefault();
        axios.post('/api/signup',{username:this.state.username,
                                                        email: this.state.email,
                                                        phoneNumber: this.state.phoneNumber,
                                                        password: this.state.password
                                                    }).then((res)=>{
        if (res.data.success) {
            this.props.history.replace('/hobbies')
        }
        else{
            alert(res.data.msg);
        }
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
                        <h5>Already have an account? &nbsp; &nbsp; <Link to="/log-in">Sign In</Link> </h5>
                    </div>
                    <div className="signup-Page ui centered card">
                        <form className="ui form" onSubmit={this.handleAddUser}>
                            <div className="field left aligned required">
                                <label>Username</label>
                                <input placeholder="Username" maxLength="10"
                                onChange={(e) => this.setState({username: e.target.value})}
                                required={true}/>
                            </div>
                            <div className="field left aligned required">
                                <label>Password</label>
                                <div className="ui input">
                                    <input type="password" placeholder="*******" maxLength="10" pattern=".{6,}"
                                    onChange={(e) => this.setState({password: e.target.value})}
                                    required={true}/>
                                </div>
                            </div>
                            <div className="field left aligned required">
                                <label>Email</label>
                                <div className="ui input">
                                    <input type="email" placeholder="joe@schmoe.com" 
                                    onChange={(e) => this.setState({email: e.target.value})}
                                    required={true}/>
                                </div>
                            </div>
                            <div className="field left aligned required">
                                <label>Phone</label>
                                <input type="tel" placeholder="Phone Number" maxLength="20" title="Enter Your Phone Number"
                                onChange={(e) => this.setState({phoneNumber: e.target.value})}
                                required={true}/>
                            </div>
                            <button type="submit" className="ui floating button">Sign up</button>
                            </form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default SignupPage;