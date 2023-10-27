import { useEffect, useState } from "react"
import axios from "axios"

function APIData(){
    const[user,setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=> setUser(response.data))
        .catch((err)=> console.log(err))
    },[]
    
    )
    return(
        <>
        {user.map((item,index) => {
            return(
                <>
                <h2>{item.name}</h2>
                <h2>{item.username}</h2>
                </>
            )
        })}
        
        </>
    )
}
export default APIData