import React, {useState} from 'react';
import './App.css';


function App() {
let[a, setA]=useState(0)
    const onClickHandler=()=>{
    setA(++a);
    console.log(a)
    }

    const onClickHandler2=()=>{
    setA(--a);
    console.log(a)
    }
    return (
      <div className='App'>
          <h1>{a}</h1>
          <button className='Null1' onClick={onClickHandler}>+</button>
          <button className='Null2' onClick={onClickHandler2}>-</button>
      </div>
    );
}

export default App;
