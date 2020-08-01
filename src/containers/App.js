import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props); // inicializar el constructor
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Yiro', age: 33 },
      { id: 2, name: 'Yujin', age: 29 },
      { id: 3, name: 'Kripto', age: 10 }
    ],
      showPersons: false,
      showCockpit: true,
      changedCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changedCounter: prevState.changedCounter + 1
        };
      });
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
    console.log('[App.js] render');
    let persons = null;


    if (this.state.showPersons) {
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
    }

    return (
        <Aux>
          <button onClick={()=>{this.setState({showCockpit: false})}} >Remove Cockpit</button>
          { this.state.showCockpit ? (<Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />): null}
          {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
