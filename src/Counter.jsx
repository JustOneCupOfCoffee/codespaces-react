
import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return (<>
    <button onClick={()=>setCount(count+1)}><img src="issac.jpg" width="150" height="150"></img></button>
    <button onClick={()=>setCount(count-1)}><img src="issac.jpg" width="150" height="150"></img></button>
    <button onClick={()=>setCount(count==0)}><img src="issac.jpg" width="150" height="150"></img></button>
    <p>You clicked {0+count} times</p>
    <p>Newton's HP : {200-count}</p>
        </>);
}