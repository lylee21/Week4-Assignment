import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from './actions';


export default class Counter extends Component {
  state = {
    
  }

  handleIncrement = () => {
    this.props.increment(1);
  }

  render() {
    return (
      <>
        {this.props.counter}
        <button onClick={this.handleIncrement}>+</button>
      </>
    )
  }
}

//Counter.js sending data to reducer
const mapStateToProps = (state) => {
  return {
    counter: state.count
  }
}

