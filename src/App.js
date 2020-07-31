import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Yiro', age: 33 },
      { id: 2, name: 'Yujin', age: 29 },
      { id: 3, name: 'Kripto', age: 10 }
    ],
      showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); //Nos trae el indice de donde se detecto que hubo un cambio en el
    //input

    const person = {
      ...this.state.persons[personIndex]
    };
    // crea una copia nueva unica del objecto que va a se modificado
    //mediante el spread operator

    person.name = event.target.value;
    // el person name del nuevo objeto creado va a ser igual o lo que
    // se escriba en el event target value , el event fue pasado como parametro

    const persons = [...this.state.persons]; // vamos a crear una copia modifica
    //ble de todo el state
    persons[personIndex] = person;
    //vamos a cambiar la perdona en el indice indicado con el nuevo objeto creado
    // y su nuevo valor

    this.setState({persons: persons});
    // por ultimo seteamos el estado anterior que sea igual a al nueva copia
    //modificada de nuestro estado y con esto hacemos two way binding.
  }


  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //Slice create a new copy
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index)=>{
            return <Person
                      key={person.id}
                      click = {this.deletePersonHandler.bind(this, index)}
                      name={person.name}
                      age={person.age}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.App}>
          <h1>I'm Yiro Yi a react developer</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}
            >Show</button>
          {persons}
        </div>
    );
  }
}

export default App;
