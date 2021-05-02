import React from 'react'

function Greet(){
    return <h1> Hello From Google </h1>
}

export const Greeting = (props) => {
    const {name,heroname} = props
    console.log(props)
    return(
        <div>
            <h1>Welcome to youtube {name} aka  {heroname}</h1>
        </div>
    )
}

export default Greet;

