import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { pseudoRandomBytes } from 'crypto';


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

  nameChangedHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 48 },
        { name: 'Lucas', age: 3 },
        { name: 'Sarah', age: 1 },
        { name: 'Náthila', age: 32 }
      ],
    })
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
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
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <p>Algo</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
