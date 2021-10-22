import React, { PureComponent } from 'react'
import Np from './Np'
export class Pure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "maya"
        }
    }
    componentDidMount(){
        setInterval(()=>this.setState({
            name: "maya"
        }),2000 )
        
    }

    render() {
        console.log("pure")
        return (
            <div>
                {this.state.name}
                <Np name={this.state.name} />
            </div>
        )
    }
}

export default Pure
