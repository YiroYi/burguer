import React, { Component } from 'react';
import Person from './Person/person';


class Persons extends Component {
      // static getDerivedStateFromProps(props, state) {
      //   console.log('[Persons.js] getDerivedStateFromProps');
      //   return state;
      // }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        if (nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked ) {
          return true;
        } else {
          return false;
        }
         //solo retorna true si quiere que siga haciendo
        //el updating o si ya no
      }

      getSnapshotBeforeUpdate() {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
      }

      componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate')
      }

      componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
      }

      render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index)=> {
              return <Person
                        key={person.id}
                        click = {() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.props.changed(event, person.id)}
                        />
            });

      }
}
export default Persons;
