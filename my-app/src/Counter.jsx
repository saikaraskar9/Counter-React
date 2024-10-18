import "./Counter.css";
import { useState } from "react";

function Counter(){
  const[count,setcount] = useState(0)

  const increment=()=>{
    setcount(count+1)
  }

  const decrement=()=>{
    setcount(count-1)
  }

  return(
    <>
  <div className="container">
   <h1 className="number">{count}</h1>
   </div>
   <section className="btn-container">
   <button onClick={increment}  className="increment">+</button>
   <button onClick={decrement}  className="decrement">-</button>
   </section>
   </>
  
  );
}

export default Counter;