//Dom,Actual,Real....

import { useState } from "react";

function counter(){
    const [count, setCount] = useState(0)
    
    return(
        <>
        <h1> count value : { count}</h1>
        <button onClick={() => setCount(count+1)}>increment</button>
        
        </>
    )
}
export default counter;