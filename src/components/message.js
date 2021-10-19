import React, { Component } from 'react';
class Message extends Component {
    constructor(){
        super();
        this.state={
            message: "welcome",
        }
    }
    getSubscription(){
        this.setState(
            {message:"thankyou"}
        )
    }
    render() { 
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.getSubscription()}>subscribe</button>
        </div>
        );
    }
}
 
export default Message;