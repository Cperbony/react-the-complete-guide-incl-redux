import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: 'Claus', age: 48 },
      { name: 'Lucas', age: 3 },
      { name: 'Sarah', age: 1 },
      { name: 'Náthila', age: 32 }
    ],
    otherState: 'Some other values here',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 48 },
        { name: 'Lucas', age: 3 },
        { name: 'Sarah', age: 1 },
        { name: 'Náthila', age: 32 }
      ],
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: pointer,
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            name={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            name={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Claudinei')}
            changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
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
