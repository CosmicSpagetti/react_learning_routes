import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Creatures from './creatures'
import unicornData from './data/unicorn-data';
import sharkData from './data/shark-data';
import puppyData from './data/puppy-data'
import CreatureDetails from './CreatureDetails'

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to='/unicorns' className='nav'>Unicorns</NavLink>
          <NavLink to='/puppies' className='nav'>Puppies</NavLink>
          <NavLink to='/sharks' className='nav'>Sharks</NavLink>
        </header>
        <Route exact path='/' component={Home} />
        <Route exact path='/unicorns' render={() => <Creatures data={unicornData} />} />
        <Route exact path='/puppies' render={() => <Creatures data={puppyData} />} />
        <Route exact path='/sharks' render={() => <Creatures data={sharkData} />} />
        <Route path='/unicorns/:id' render={({ match }) => {
          const { id } = match.params
          const creature = unicornData.find(unicorn => unicorn.id === parseInt(id))
          return creature && <CreatureDetails {...creature} />
        }} />
        <Route path='/puppies/:id' render={({ match }) => {
          const { id } = match.params
          const creature = puppyData.find(puppy => puppy.id === parseInt(id))
          return creature && <CreatureDetails {...creature} />
        }} />
        <Route path='/sharks/:id' render={({ match }) => {
          const { id } = match.params
          const creature = sharkData.find(shark => shark.id === parseInt(id))
          return creature && <CreatureDetails {...creature} />
        }} />
      </main>
    );
  }
}
