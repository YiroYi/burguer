import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

class App extends Component {

  state = {
    persons: [
      { name: 'Yiro', age: 33 },
      { name: 'Yujin', age: 29 },
      { name: 'Kripto', age: 10 }
    ]
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS this.state.persons[2].name = "Jaime";
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Tu', age: 29 },
        { name: 'El', age: 10 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Yiro', age: 33 },
        { name: event.target.value, age: 29 },
        { name: 'Kripto', age: 10 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>I'm Yiro Yi a react developer</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Yiro Yi')}
          style={style}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} >My hobbies: Coding</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Yiro Yuzin')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
