 import React, { Component } from 'react';
import './Auth.css';
import axios from 'axios'
import {getUser} from '../../redux/reducer';
import {connect} from 'react-redux'

class Auth extends Component {
	constructor(){
		super()
		this.state = {
			registerToggle: false,
			username: 'no username',
			password: 'no password',
			profile_pic: 'No picture'
		};
		this.handleRegister = this.handleRegister.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
    
    registerToggle=()=>{
        this.setState({registerToggle: !this.state.registerToggle})
    }

	handleRegisterInput=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleRegister=()=>{
		const { username, password, profile_pic } = this.state;
		console.log(username, password, profile_pic)
        axios.post('/api/register', {username, password, profile_pic}).then(res => {
			this.props.getUser(res.data)
			console.log(res)
			// this.props.history.push('/')
            this.registerToggle();
        })
        .catch(err => console.log(err));
	}
	handleLoginInput(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleLogin(){
		const {username, password} = this.state;
		axios.post('/api/login', { username, password})
		.then( res=>{
			this.props.getUser(res.data)
			console.log(res)
			this.props.history.push('/')
		})
		.catch(err => console.log(err))
	}

	render() {
		return (
			<div className='Auth'>
                {this.state.registerToggle?
				(<div className='box'>
					<div className='logo'>
						<img src='' alt='' />
					</div>
					<h1>Helo</h1>
					<h2>Register</h2>
					<div className='input-container'>
						<label htmlFor=''>Username: </label>
						<input onChange={ (e)=> this.handleRegisterInput(e) } name='username' type='text' placeholder='Enter Username' />
						<br />
						<label htmlFor=''>Password</label>
						<input onChange={ (e)=> this.handleRegisterInput(e) } name='password' type='password' placeholder='Enter Password' /><br/>
						<label htmlFor=''>Profile Picture</label>
						<input onChange={ (e)=> this.handleRegisterInput(e) } name='profile_pic' type='password' placeholder='Enter Password' />
					</div>
					<div className='btn-container'>
						<button onClick= {this.registerToggle}>Login</button>
						<button onClick= {this.handleRegister}>Register</button>
					</div>
				</div>):(<div className='box'>
					<div className='logo'>
						<img src='' alt='' />
					</div>
					<h1>Helo</h1>
					<h2>Login</h2>

					<div className='input-container'>
						<label htmlFor=''>Username: </label>
						<input name='username'onChange={(e)=> this.handleLoginInput(e)} type='text' placeholder='Enter Username' />
						<br />
						<label htmlFor=''>Password</label>
						<input name='password' onChange={(e)=> this.handleLoginInput(e)} type='password' placeholder='Enter Password' />
					</div>
					<div className='btn-container'>
						<button onClick={this.handleLogin}>Login</button>
						<button onClick={this.registerToggle}>Register</button>
					</div>
				</div>)}
                
			</div>
		);
	}
}

export default connect(null,{getUser})(Auth);
