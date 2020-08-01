import React, { Component } from 'react';
import styled from 'styled-components'
import classes from './person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

//props = properties
//{props.children} pasa lo que este dentro del componente.

class Person extends Component {
    componentDidMount() {
      this.inputElement.focus();
    }
    render() {
      console.log('[Person.js] rendering...');
      return (
        <Aux>
          <p key="k1" onClick={this.props.click}> I'm a {this.props.name}, {this.props.age} years old</p>
          <p key="k2">{this.props.children}</p>
          <input key="k3"
                 type="text"
                 onChange={this.props.changed}
                 value={this.props.name}
                 ref={(inputEl)=>{this.inputElement = inputEl}}
                 />
        </Aux>
      );

    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
