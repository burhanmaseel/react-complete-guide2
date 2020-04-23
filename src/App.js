import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    }

    let persons = null;
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
    }

    return (
      <div className="App">
        <h1>Hi this is my first react app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>

        {persons}

        <UserInput changedInput={this.inputChangeHandler} />
        <UserOutput inputValue={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
