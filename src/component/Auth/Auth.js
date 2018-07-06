import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserInfo} from './../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    updateUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    updatePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    handleRegister(){
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        axios.post('/api/auth/register', user).then(res => {
            this.setState({
                username: '',
                password: ''
            })
        })
    }
    handleLogin(){
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        axios.post('/api/auth/login', user).then(res => {
            this.setState({
                username: '',
                password: ''
            })
        })
    }

    
    render(){
        return (
            <div>
                <input type="text" onChange={this.updateUsername} placeholder="username goes here"/>
                <input type="text" onChange={this.updatePassword} placeholder="password goes here"/>
                <Link to="/dashboard"><button onClink={this.handleLogin}>Login</button></Link>
                <Link to="/dashboard"><button onClick={this.handleRegister}>Register</button></Link>
            </div>
        )
    }
}
export default connect(null, {getUserInfo})(Auth);