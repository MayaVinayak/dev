import React from 'react'
import Child from './Child'
function Parent() {

    let person=[
        {
            name:"maya",
            age:22
        },
        {
            name:"suba",
            age:26
        }
    ]
    let list =person.map(person => <Child key={person.name} person={person}/>)
    return (
        <div>
            {list }
        </div>
    )
}

export default Parent
