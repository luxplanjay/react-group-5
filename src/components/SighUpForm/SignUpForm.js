import React, { Component } from 'react';
import shortid from 'shortid';
import { validateAll } from 'indicative';
import ErrorNotification from './ErrorNotification';

const rules = {
  login: 'required|string',
  email: 'required|email',
  password: 'required|string|min:6',
};

const messages = {
  'login.required': 'Please choose a unique username for your account',
  'email.required': 'Enter a valid email address.',
  'email.email': 'Email is invalid',
  'password.required': 'Enter a valid password.',
  'password.min': 'Password must be at least 6 characters long',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

export default class SignUpForm extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    agreed: false,
    gender: null,
    age: '',
    errors: null,
  };

  loginInputId = shortid.generate();

  handleChange = e => {
    const { name, value, type, checked } = e.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password } = this.state;

    validateAll({ login, email, password }, rules, messages)
      .then(data => {
        console.log('success: ', data);

        // this.props.onSignUp({ ...this.state });
        // this.reset();
      })
      .catch(errors => {
        console.log('error: ', errors);

        const formattedErrors = {};

        errors.forEach(error => {
          formattedErrors[error.field] = error.message;
        });

        console.log(formattedErrors);

        this.setState({
          errors: formattedErrors,
        });
      });
  };

  reset = () => {
    this.setState({
      login: '',
      email: '',
      password: '',
      agreed: false,
      gender: null,
      age: '',
    });
  };

  render() {
    const { login, email, password, agreed, gender, age, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Login
          <input
            type="text"
            value={login}
            onChange={this.handleChange}
            id={this.loginInputId}
            name="login"
          />
          {errors && <ErrorNotification label={errors.login} />}
        </label>
        <br />
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
          {errors && <ErrorNotification label={errors.email} />}
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={this.handleChange}
            name="password"
          />
          {errors && <ErrorNotification label={errors.password} />}
        </label>
        <br />
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
            name="agreed"
          />
        </label>
        <br />
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <br />
        <label>
          Choose your age group
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
