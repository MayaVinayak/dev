import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: ""
        }
    }
    getchange = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.getchange} />
                </div>
            </form>
        )
    }
}

export default Form
