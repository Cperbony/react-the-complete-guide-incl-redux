import React, { Component } from 'react';
import classes from './App.css';

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
    let persons = null;
    let btnClass = '';

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

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold );
    }

    return (
        <div className={classes.App}>
          <h1>Hi! I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This about dinamically classes</p>

          <button
          className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Person</button>
          {persons}
        </div>
    );
  }
}

export default App;
