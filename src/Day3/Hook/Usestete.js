import { useState } from "react"

function CompoUseState(){
    const[number, setNumber] = useState(0)
    return(
        <>
        <h1>Number : {number}</h1>
        <button onClick={()=> setNumber(number+1)}>increment</button>
        
        </>
    )
}

export default CompoUseState;