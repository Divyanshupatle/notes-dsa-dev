import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }


    return(
        <>
            <p>{count}</p  >
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    )
}