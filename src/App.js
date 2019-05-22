import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';

import Person from './Person/Person';



class App extends Component {

  state = {
    persons: [
      { id: 'a1', name: 'Claus', age: 48 },
      { id: 'a2', name: 'Lucas', age: 3 },
      { id: 'a3', name: 'Sarah', age: 1 },
      { id: 'a4', name: 'Náthila', age: 32 }
    ],
    otherState: 'Some other values here',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //Alternatives
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //ES6 Operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[': hover'] = {
        backgroundColor: 'lightred',
        color: 'black',
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi! I'm a React App</h1>
          <p className={classes.join(' ')}>This about dinamically classes</p>

          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Person</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
