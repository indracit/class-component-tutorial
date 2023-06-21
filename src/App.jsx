import React, { Component } from 'react';
import Counter from './Counter';
import Post from './Post';
import Tick from './Tick';
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      counter:0
    }

    this.handleClick = this.handleClick.bind(this)
  }

    componentDidUpdate(prevProps, prevState){

      console.log(prevState.counter)
      if(this.state.counter === 0){
        alert("Reached Zero")
      }

    }

    shouldComponentUpdate(nextProps, nextState) {
      
      if (nextState.counter  < 0) {
        return false;
      }
      return true;
    }


    handleClick(num) {

      this.setState(()=>{
        if(this.state.counter < 0 ) {
          return { counter : 0 }
        }
        return { counter : this.state.counter + num } } )

    }

  render() {
    return (
      <div className='App-header App'>
        <Counter state = {this.state} handleClick={this.handleClick}/>
        <Tick/>
        <Post/>
      </div>
    );
  }
}

export default App;