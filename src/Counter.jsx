import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.state={
            enable : false
        }
    }

    static getDerivedStateFromProps(nextProps,nextState){

        console.log(nextProps);
        if(nextProps.state.counter === 0){

            return {
                enable : true
            }
        }
        
        return {
            enable : false
        }
    }

    handleButtonClick = (num) => {
        this.props.handleClick(num);
    };

    render() {
        const {state} = this.props
        return (
            <div className='post center'>
                <h1>Counter</h1>
                <p>{state.counter}</p>
                {this.state.enable ? <h1>Dont press minus button</h1> : null}
                <button onClick={()=>this.handleButtonClick(+1)}> + </button>
                <button onClick={()=>this.handleButtonClick(-1)}> - </button>
            </div>
        );
    }
}

export default Counter;