import { useState } from "react"
import Home3 from "./Home3"

function StateUp(){
     const[NameData, setNameData] = useState("")
      const getFunction =(data) =>{
        setNameData(data)

      }
    return(
        <>
        <h1>Parent : {NameData}</h1>
        <h1>this is state uplifing</h1>
        <Home3 getData ={getFunction}/>
        </>
    )
 }
 export default StateUp