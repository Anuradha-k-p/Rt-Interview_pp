const { useReducer, useState } = require("react")

const initialState = {
    balance : 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'deposit' : 
        return {balance : state.balance + action.amount}
        case 'withdraw' : 
        return {balance : state.balance - action.amount}
        default :
         return state.balance
    }

}
function ReduceCompo(){
    const [state,dispatch] = useReducer(reducer,initialState)
    const [amount, setAmount] = useState(0);

    const handleDepo = () =>{
        dispatch({type: "deposit", amount : parseInt(amount)})
    }

    const handleWith = () =>{
        dispatch({type: "withdraw", amount : parseInt(amount)})
    }
    return(
        <>
        <h1>Balance : {state.balance}</h1>
        <input type="number" placeholder="enter your amount ..." name="amount" onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={handleDepo}>Deposite</button> 
        <button onClick={handleWith}>withdraw</button>
        
        </>
        )
}
export default ReduceCompo;
