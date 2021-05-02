import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 10000
        }
    }

    increment(){
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }

    incrementFiveTimes(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h2>likes - {this.state.count} </h2>
                <button onClick ={ ()=> this.incrementFiveTimes()}>Likes</button>
            </div>
        )
    }
}

export default Counter
