import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import Home from './Home'


export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to='/unicorns' className='nav'>Unicorns</NavLink>
          <NavLink to='/puppies' className='nav'>Puppies</NavLink>
          <NavLink to='/sharks' className='nav'>Sharks</NavLink>
        </header>
        <Route path='/' component={Home} />
      </main>
    );
  }
}
