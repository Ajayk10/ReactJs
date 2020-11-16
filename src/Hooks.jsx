import React, { useState } from 'react'


export default function Hooks() {
    const [count, setCount] = useState(10)
    const [bgcolor, setBgcolor] = useState()
    const [bname, setBname] = useState("Click Me!")
    const [bstate, setBstate] = useState("true")


    const Increment = () => {
        setBgcolor('red')
        setBname('You have clicked')
        setBstate('false')
        console.log('Before setCount()=' + count)
        setCount(count + 1);
        console.log('After setCount()=' + count)


    }
    return (
        <div style={{ backgroundColor: bgcolor }}>
            {console.log('After Increment()=' + count)}
            <h1>Count={count}</h1>
            <button id='button' className='btn btn-info' onClick={Increment}>{bname}</button>
        </div>
    )
}
