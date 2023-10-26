import { useState } from "react";


 function Compo(){
    const [value, setValue] = useState(true);
    return(
        <>
        {value ? <Call1/> : <Call2/>}
        <button onClick={()=> setValue(!value)}>Change</button>

        </>
    )
 }
 export default Compo;

 function Call1(){
    return(
        <>
        <h1> Component1</h1>
        
        </>
    )
 }

 
 function Call2(){
    return(
        <>
        <h1> Component2</h1>
        
        </>
    )
 }