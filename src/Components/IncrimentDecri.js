import React from 'react'
import{useSelector,useDispatch} from "react-redux";
import {Increment,Decrement} from "../Services/Action/action"




function IncrimentDecri() {

  const mystate = useSelector((state)=>state.changeNumber);
  console.log(mystate);

  const dispatch= useDispatch();
  console.log(dispatch);


  return (
    <div>
        <h4>Incri & Decri</h4><br/>
        <h5>{mystate}</h5><br />
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>

        </div>
  )
}

export default IncrimentDecri