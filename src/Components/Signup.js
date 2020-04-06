import React from 'react';
import {Redirect} from 'react-router-dom';
import * as firebase from '../firebase';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      pass : '',
      repass : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  handleChange = (e) => {
    let name = e.target.name;
    this.setState(
      {
        [name] : e.target.value
      },
      () => {
        if(this.state.pass === this.state.repass && this.state.pass >= 8 ){
          document.querySelector('button').disabled = false;      
        }else{
          document.querySelector('button').disabled = true;
        }
      }
    )
  }

  submitChange = (e) => {
    console.log(e);
    
  }

  componentDidMount(){
    document.querySelector("button").addEventListener('click', e => {
      e.preventDefault();
      const email = this.state.email;
      const pass = this.state.pass;
      firebase.auth.createUserWithEmailAndPassword(email,pass)
      .then(res => {
        console.log(res);
        return <Redirect to="/" />
      })
    })
  }

  render(){
    return(
      <div>
        <form id="signupForm">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange}/><br/>
  
          <label htmlFor="newPass">New Password</label>
          <input type="password" name="pass" onChange={this.handleChange}/><br/>
  
          <label htmlFor="rePass">Retype Password</label>
          <input type="password" name="repass" onChange={this.handleChange}/><br/>
  
          <button onClick={this.submitChange} disabled={true} type="submit">SIGN UP</button>
        </form>
      </div>
    )
  }
}

export default Signup;