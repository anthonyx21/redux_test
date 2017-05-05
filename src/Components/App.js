import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import * as CounterActions from '../Actions/CounterActions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }

  increment(){
    this.props.increment();
  }  
  incrementIfOdd(){
    this.props.incrementIfOdd();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {this.props.counters.map((b,i) => <li key={i}>{b}</li> )}
        </ul>
        <input type="button" onClick={ e => {
            e.preventDefault();
            this.increment();
        }} value="click me please" />
        <input type="button" onClick={ e => {
            e.preventDefault();
            this.incrementIfOdd();
        }} value="redux" />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    counters: state.counters
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    increment: () => dispatch(CounterActions.increment()),
    incrementIfOdd: () => dispatch(CounterActions.incrementIfOdd())
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(App);