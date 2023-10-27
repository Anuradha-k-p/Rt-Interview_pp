import { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export const Store = createContext();

function StoreCompo(){
    const [data, setData]  = useState([
        {name : "Swapnali"},
        {name : "Swapnali"},
        {name : "Swapnali"},
        {name : "Swapnali"},
    ])
    return(
        <>
        <Store.Provider value={{data,setData}}>
            <Child1/>
            <Child2/>
        </Store.Provider>
        
        </>
    )
}
export default StoreCompo;