
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        }
    }
    plus(){
        this.setState((state => ({
            count: state.count+1,
        })
        ))
    }
    plustwo(){
        this.plus()
        this.plus()
    }

    render() {
        return (
            <div>
             <h1>Count {this.state.count}</h1>   
             <button onClick={ () =>this.plustwo()}>plus</button>
            </div>
        )
    }
}

export default Counter
