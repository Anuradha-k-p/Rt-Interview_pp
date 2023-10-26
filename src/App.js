
import './App.css';
import Compo from './Day2/ConditionalRendering/Compo';
import CounterChild from './Day2/CounterProp/CounterChild';
import LazyLoad from './Day2/LazyLoding/LazyLoad';

import ParentCompo from './Day2/Parent';
import RouteCompo from "./Day2/Routeing/RouteCompo"

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
      <LazyLoad/>
    
      
    </div>
  );
}

export default App;
