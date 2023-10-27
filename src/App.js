
import './App.css';
import CompoUseEffect from './Day3/Hook/UseEffect';
// import APIData from './Day3/Uplifing/Axios/ApiData';
// import StoreCompo from './Day3/Uplifing/ContextApi/StoreCompo';
// import StateUp from './Day3/Uplifing/StateUp';
import CompoUseState from './Day3/Hook/Usestete';
// import Compo from './Day2/ConditionalRendering/Compo';
// import CounterChild from './Day2/CounterProp/CounterChild';
// import LazyLoad from './Day2/LazyLoding/LazyLoad';

// import ParentCompo from './Day2/Parent';
// import RouteCompo from "./Day2/Routeing/RouteCompo"

function App() {
  return (
    <div className="App">
      {/* <ParentCompo/>
      <CounterChild/>
      <br/>
      <hr/>
      <RouteCompo/>
      <hr/>
      <Compo/>
      <hr/> */}
      {/* <LazyLoad/> */}
      {/* <StateUp/>
      <APIData/>
      <StoreCompo/> */}
      <CompoUseState/>
      <hr/>
      <CompoUseEffect/>
    
      
    </div>
  );
}

export default App;
