import { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";


function CallBackParent(){
    const [data, setData] = useState(0)
    const [count, setCount] =useState(100)


    // function Increment(){
    //     setData(data+10)
    // }

    const Increment = useCallback(() =>{
        setData(data+10)
    },[data])



    return(
        <>
        <CallbackChild send = {Increment}/>
        <h1>Data Value : { data}</h1>
        <button onClick={()=> setData(data+1)}>increment</button>
        <h1>
            Count Value : {count}

        </h1>
        <button onClick={()=> setCount(count-5)}>decrement</button>
        
        </>
    )
}
export default CallBackParent;