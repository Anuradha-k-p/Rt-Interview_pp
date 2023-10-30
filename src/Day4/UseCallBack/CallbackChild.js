import { memo } from "react";

function CallbackChild(props){
    return(
        <>
        <button onClick={props.send}>button from child</button>

        
        </>
    )
}
export default memo(CallbackChild);