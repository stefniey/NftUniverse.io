import React, { useState } from 'react'
import './NavBar.css';

const NavBar = () => {
    const [count, setCount] = useState('hello');

    const prev = () => {
        setCount(count + 'chidi');
        console.log(count)

    }

    const next = () => {
        setCount(count - 'stef');

        console.log(count)

    }

    return (

        <div>

            <button onClick={prev}> + </button>
            {/* <input onClick={prev} type="text" / > */}
            {/* <span>{count}</span> */}
            <input type="text" />
            <button onClick={next}> Confirm </button>

        </div>
    )
}

export default NavBar