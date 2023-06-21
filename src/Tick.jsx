import React, { Component } from 'react';
import './App.css'

class Tick extends Component {
    constructor(props){
        super(props)
        this.state = {
            tick : 0
        }
    }
    timerId = null;

    componentDidMount(){
        this.timerId = setInterval(()=>this.setState((prevstate)=>({tick: prevstate.tick+1})), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }


    render() {
        return (
            <div className='post center'>
                <h2>Tick</h2>
                <p>{this.state.tick}</p>
            </div>
        );
    }
}

export default Tick;