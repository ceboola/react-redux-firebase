import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { firebaseApp } from '../firebase';
import {showButton, hideButton} from '../actions/actionCreators';

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )
      } else {
        return ''
      }
    })}
  </div>

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      formErrors: {name: '', email: '', password: ''},
      nameValid: false,
      emailLoginValid: false,
      passwordLoginValid: false,
      formValid: false,
      error: {
        message: ''
      }
    }
  }

  handleUserInput = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({[name]: value},
                () => { this.validateField(name, value) });
}

  validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let passwordLoginValid = this.state.passwordLoginValid;
  let emailLoginValid = this.state.emailLoginValid;

  switch(fieldName) {

    case 'password':
      passwordLoginValid = value.length >= 6;
      fieldValidationErrors.password = passwordLoginValid ? '' : ' is too short, at least 6 chars';
      break;

    case 'email':
      emailLoginValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailLoginValid ? '' : ' is invalid';
      break;

      default:
        break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  passwordLoginValid: passwordLoginValid,
                  emailLoginValid: emailLoginValid,
                }, this.validateForm);
}

  validateForm() {
    this.setState({formValid: this.state.emailLoginValid && this.state.passwordLoginValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
}

  signUp = () => {
    console.log('this.state signup', this.state)
    const { email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  signIn = () => {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  signOut = () => {
    console.log('this.state', this.state)
    console.log('this.props', this.props)
    firebaseApp.auth().signOut();
    this.refs.signRef.reset();
  }

  render() {
    return (
      <div className="signup-container">
        <form ref="signRef" className="form-group">
          <input id="email" name="email"
            className="form-control"
            type="text"
            placeholder="email"
            value={this.state.emailLogin}
            onChange={(event) => { this.setState( {email: event.target.value} ) }, this.handleUserInput}
          />

          <input id="password" name="password"
            className="form-control"
            type="password"
            placeholder="password"
            value={this.state.passwordLogin}
            onChange={(event) => { this.setState( {password: event.target.value} ) }, this.handleUserInput }
          />
          <Button
            bsStyle="primary"
            disabled={!this.state.formValid}
            onClick={() => this.signUp()}
          >
            Sign Up
          </Button>

          <Button
            bsStyle="success"
            disabled={this.props.login.email ? true : false}
            onClick={() => this.props.actions.hideButton() && this.signIn()}
          >
            Sign In
          </Button>

          <Button
            bsStyle="danger"
            disabled={this.props.login.email ? false : true}
            onClick={() => this.props.actions.showButton() && this.signOut()}
          >
            Sign Out
          </Button>
        </form>

        <div className="signup-error">
          <u><p>{this.state.error.message}</p></u>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    )
  }
}
