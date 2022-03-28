import React, { useState } from 'react';
import './App.css';
import Testclass from './pages/testClass';
function App() {
  const [select, setselect] = useState("");
  return (
    <div>
      <h2 className='xx'>Hello React {name}</h2>
      {testCond}
      <ul>
        <Test use="Hello Props" />
      </ul>
      <TimeShow />
      <Testclass color="blue" />
      <button onClick={() => pp("data printed")}>Print</button>
      <Statment enable={false} />
      <>
        <RenderID></RenderID>
        <Form></Form>
        <FormAdvanced />
      </>
      <div>
        <select value={select} onChange={e => setselect(e.target.value)}>
          <option value={'C#'}>C#</option>
          <option value={'C++'}>C++</option>
          <option value={'js'}>javaScript</option>
        </select>
      </div>
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
  return (
    <p>{t}</p>
  )
}
//
const pp = (n) => {
  console.log(n)
}
//
const Statment = (props) => {

  const StatmentV2 = () => {
    return (
      <>
        {props.enable &&
          <h1>
            Enable State 2
          </h1>
        }

      </>
    )
  }
  if (props.enable) {
    return (
      <>
        <StatmentV2 />
        <b>enable</b>
      </>
    )

  } else {
    return <b>disable</b>

  }

}
//
const testList = ['m', 'e', 'h', 'r', 'a', 'b'];
const listId = [{ id: 1, name: 'Ali' }, { id: 2, name: 'mmd' }]
const RenderID = () => {
  return (
    <>
      <h3>{listId.map((i) => <Re key={i.id} id={i.id} name={i.name}></Re>)}</h3>
    </>
  )
}
const Re = (props) => {
  return (
    <><h3>{props.id}: {props.name} </h3></>
  )
}
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

function Form() {
  const [getName, setName] = useState("sample");
  const submited = () => {
    //    event.preventDefault();
    alert(`The name you entered was: ${getName}`)
  }
  return (
    <div>
      <form action='#' autoComplete='false' onSubmit={submited}>
        <b>Enter Name : </b>
        <input onChange={(e) => setName(e.target.value)} value={getName} type={'text'} />
      </form>
      <h1>Hello {getName}</h1>
    </div>
  )
}

function FormAdvanced() {
  const [getInputs, setInputs] = useState({});

  const HandleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setInputs(s => ({ ...s, [name]: value }))
  }

  return (
    <div>
      <form>
        <b>UserName:</b>
        <input type='text' name='UserName' onChange={HandleChange} />
        <br />
        <b>Password:</b>
        <input type='password' name='Password' onChange={HandleChange} />
        <br />
        <textarea name='description' onChange={HandleChange}>
        </textarea>
        <input type='submit' onClick={console.log(getInputs)} />
        <b>{getInputs.UserName}</b>
      </form>
    </div>
  )

}
//
//#endregion
export default App;