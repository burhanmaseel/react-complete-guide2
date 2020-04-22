import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: "Max",
        age: "16"
      },
      {
        name: "Manu",
        age: "14"
      },
      {
        name: "John",
        age: "12"
      },
    ],
    otherState: "Some other value"
  });

  const [ otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximilian", age: "16" },
        { name: "Manu", age: "14" },
        { name: "Johnathan", age: "27" }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi this is my first react app</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Badminton
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
