import React from 'react';
import './App.css';
import Testclass from './OtherPage/testClass';
function App() {
  return (
    <div>
      <h2 className='xx'>Hello React {name}</h2>
      {testCond}
      <ul>
        <Test use="Hello Props"/>
      </ul>
      <TimeShow />
      <Testclass color="blue"/>
      <button onClick={()=> pp("data printed")}>Print</button>
      <Statment enable = {false} />
    </div>
  );
}
//#region Start_Components
const name = <em>Mehrab Aghaee</em>
let x = 10;
let testCond = <strong>{x < 1 ? 'Good' : 'Bad'}</strong>

//

const TimeShow = () => {
  let t = new Date().toTimeString();
  return(
    <p>{t}</p>
  )
}

//

const pp = (n) =>{
  console.log(n)
}

//


const Statment = (props) =>{

  const StatmentV2 = () =>{
    return(
      <>
      {props.enable && 
      <h1>
        Enable State 2 
      </h1>
      }
      
      </>
    )
  }
  if(props.enable){
    return(
      <>
       <StatmentV2/>
       <b>enable</b>
       </>
    )

  }else{
    return <b>disable</b>
    
  }

}

//

const testList = ['m', 'e', 'h', 'r', 'a', 'b'];

const RenderList = () => {
  return testList.map((n) => <li>{n}</li>)
}
function Test(props) {
  return (
    <>
    <h1>{props.use}</h1>
    <RenderList></RenderList>
    </>
  )
}

//
//#endregion
export default App;