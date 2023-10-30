import { useMemo, useState } from "react"


function MemoCompo(){
    const [add,setAdd] = useState(0)
    const [sub, setSub] = useState(100)

    const MemoFunction = useMemo(function Addfive(){
      return add *5
    },[add])



    return(
        <>
        <h1>Add Function : {MemoFunction}</h1>

        <h1> Add : {add}</h1>
        <button onClick={()=> setAdd(add+5)}>increment</button>
        <h1> Sub : {sub}</h1>
        <button onClick={()=> setSub(sub-5)}>increment</button>

        
        </>
    )
}
export default MemoCompo;