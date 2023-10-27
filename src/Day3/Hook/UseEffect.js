import { useEffect, useState } from "react"



function CompoUseEffect(){
    const [mouse, setMouse] = useState({x : 0, y : 0})
  const  movingMouse = (event) => {
    setMouse({
         x : event.clientX,
         y : event.clientY,
         
    })
  }
    useEffect(()=>{
        window.addEventListener("mousemove" , movingMouse)
        console.log(mouse.x ,mouse.y);

        return (() => {
            window.removeEventListener("mousemove" , movingMouse)
        })

    }, [mouse])        
                                              
    return(
        <>
        <span> X :  {mouse.x} | Y : {mouse .y}</span>
        </>
    )
}
 export default CompoUseEffect;