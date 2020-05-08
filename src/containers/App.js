import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import UserInput from "../components/UserInput/UserInput";
import UserOutput from "../components/UserOutput/UserOutput";
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxilary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {
        id: "111",
        name: "Max",
        age: 16,
      },
      {
        id: "222",
        name: "Manu",
        age: 14,
      },
      {
        id: "333",
        name: "John",
        age: 12,
      },
    ],
    inputValue: "",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

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
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  }


  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (<Persons
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        persons={this.state.persons}
        isAuthenticated={this.state.authenticated} />
      );
    }



    return (
      <Aux classes={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }} >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>

        <UserInput changedInput={this.inputChangeHandler} />
        <UserOutput inputValue={this.state.inputValue} />
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
