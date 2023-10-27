import { useContext } from "react"
import { Store } from "./StoreCompo";



function Child1(){
    const ContextData = useContext(Store);
    console.log(ContextData);
    return(
        <>
        

        </>
    )
}
 export default Child1