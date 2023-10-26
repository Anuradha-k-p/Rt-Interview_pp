import ChildCompo from "./Child"

function ParentCompo(){
    const NewData = "Parent Data"
    return(
        <>
        <ChildCompo data ={NewData}/>
        
        </>
    )
}
export  default ParentCompo