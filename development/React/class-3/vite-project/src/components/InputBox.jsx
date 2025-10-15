import { useEffect, useState } from "react"

export default function InputBox(){
    // useEffect(()=>{

    // }, [data])
    const [data, setData] = useState("");
    return(
        <>
            <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}}></input>
            <button>add task</button>
        </>
    )
}