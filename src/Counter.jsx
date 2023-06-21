import React, { Component } from 'react';

class Counter extends Component {

    handleButtonClick = (num) => {
        this.props.handleClick(num);
    };

    render() {
        const {state} = this.props
        return (
            <div className='post center'>
                <h1>Counter</h1>
                <p>{state.counter}</p>
                <button onClick={()=>this.handleButtonClick(+1)}> + </button>
                <button onClick={()=>this.handleButtonClick(-1)}> - </button>
            </div>
        );
    }
}

export default Counter;