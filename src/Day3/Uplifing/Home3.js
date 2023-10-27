import { useState } from "react";

 function Home3(props){
    const [name ,setName] = useState('')
    const handlesubmit = () =>{
        props.getData(name)

    }
    return(
        <>
        <h2>this is child</h2>
        <label>name</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.name)}/>
        <button onClick={handlesubmit}>Submit</button>
        
        </>
    )
 }
 export default Home3;