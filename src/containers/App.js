import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import UserInput from "../components/UserInput/UserInput";
import UserOutput from "../components/UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      {
        id: "111",
        name: "Max",
        age: "16",
      },
      {
        id: "222",
        name: "Manu",
        age: "14",
      },
      {
        id: "333",
        name: "John",
        age: "12",
      },
    ],
    inputValue: "",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }


  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />);
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi this is my first react app</h1>
          <p className={assignedClasses.join(" ")}>This is really working</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Switch Name</button>

          {persons}

          <UserInput changedInput={this.inputChangeHandler} />
          <UserOutput inputValue={this.state.inputValue} />
        </div>
    );
  }
}

export default App;
