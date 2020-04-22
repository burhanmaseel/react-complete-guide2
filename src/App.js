import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: "16",
      },
      {
        name: "Manu",
        age: "14",
      },
      {
        name: "John",
        age: "12",
      },
    ],
    inputValue: ""
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: "Maximilian",
          age: "16",
        },
        {
          name: "Manu",
          age: "14",
        },
        {
          name: "Johnathan",
          age: "16",
        },
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Maximilian",
          age: "16",
        },
        {
          name: event.target.value,
          age: "14",
        },
        {
          name: "Johnathan",
          age: "16",
        },
      ]
    });
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    }

    return (
      <div className="App">
        <h1>Hi this is my first react app</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandler("Johnnyyy!!")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Max")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        >
          My hobbies: Badminton
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <UserInput changedInput={this.inputChangeHandler} />
        <UserOutput inputValue={this.state.inputValue} />


      </div>
    );
  }
}

export default App;
