import React from 'react';
import { render } from 'react-dom';

const person = (props) => {
   return (
      <div>
         <p>I'm a {props.name} and I am {props.age} years old!!</p>
         <p>{props.children}</p>
      </div>
   );
}

export default person;