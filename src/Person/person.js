import React from 'react';
import styled from 'styled-components'
import classes from './person.css';

//props = properties
//{props.children} pasa lo que este dentro del componente.

const person = (props) => {
    return(
      <div className={classes.Person}>
        <p onClick={props.click}> I'm a {props.name}, {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    );
  }

export default person;
