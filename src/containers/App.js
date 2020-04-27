import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import UserInput from "../components/UserInput/UserInput";
import UserOutput from "../components/UserOutput/UserOutput";
import Cockpit from '../components/Cockpit/Cockpit';
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
    const person = { ...this.state.persons[personIndex] };
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

    if (this.state.showPersons) {
      persons = (<Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            persons={this.state.persons} />
      );
    }

    

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}

        <UserInput changedInput={this.inputChangeHandler} />
        <UserOutput inputValue={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
