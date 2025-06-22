
import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("Type here!");
    function onTextChange(event){
        console.log("this function is called "+event.target.value);
        console.error("This is error");
        setValue(event.target.value);
    }
    return (<>
    <button onClick={()=>setCount(count+1)}><img src="issac.jpg" width="150" height="150"></img> <br></br>ATTACK</button>
    <button onClick={()=>setCount(count-1)}><img src="issac.jpg" width="150" height="150"></img><br></br>HEAL</button>
    <button onClick={()=>setCount(count==0)}><img src="PNG.png" width="150" height="150"></img><br></br>RESET</button>
    <button onClick={()=>setCount(count+6000)}><img src="issac.jpg" width="150" height="150"></img><br></br>+6000 CLICKS</button> <br></br>
    <button onClick={()=>setCount(count*2)}><img src="DOUBLE.jpg" width="150" height="150"></img> <br></br>DOUBLE</button>
    <button onClick={()=>setCount(count*0.5)}><img src="50.png" width="150" height="150"></img> <br></br>HALVE</button>
    <button onClick={()=>setCount(count*Infinity)}><img src="issac.jpg" width="150" height="150"></img> <br></br>INFINITY</button>
    <br></br><input value={value} onChange={(event)=>onTextChange(event)}/> Celcius
    <button onClick={()=>setValue(value*2)}><img src="DOUBLE.jpg" width="40" height="40"></img> <br></br>DOUBLE</button>
    <p>{value} Celcius to {value*1.8 + 32} Fahrenheit</p>
    <p>{value} Kilometer(s) to {value*0.621} Mile(s)</p>
    <p>{value} Centimeter(s) = {value / 9.4607e17} Lightyear(s)</p>
    <p>{value} Baht(s) to {value*1.07} Baht(s) + VAT (7%)</p>
    <p>You clicked {0+count} times</p>
    <p>Issac Newton's HP : {200-count}</p>
    <p>You typed {value.length} characters</p>
        </>);
}