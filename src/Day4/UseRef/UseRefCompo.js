import { useRef } from "react"


function UseRefCompo(){
    const InputRef = useRef(null);
    function getData(){
        console.log(InputRef.current.value)
        InputRef.current.focus();
    }
    return(
        <>
        <input type="text" ref={InputRef} placeholder="Add something"/>
        <button onClick={getData}> Submit</button>
        
        </>
    )
}
export default UseRefCompo;