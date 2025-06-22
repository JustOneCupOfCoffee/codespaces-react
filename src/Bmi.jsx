
import { useState,useRef } from "react";
function BmiText({bmi}){
    if(bmi==0) return (<><h1>0?<br></br> <img src="Octocat.png" width="240" height="240"></img></h1></>);
    if(bmi<18.5) return (<><h1>Underweight<br></br> <img src="Skeleton.jpg" width="240" height="240"></img></h1></>);
    if(bmi>30) return (<><h1>Overweight <br></br> <img src="HeavyWeaponGuy.webp" width="240" height="240"></img></h1></>);
    return (<><h1>Normal<br></br> <img src="issac.jpg" width="240" height="240"></img></h1></>);
}
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [bmi,setBmi]=useState(0)
    function calBmi(){
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBmi(w/(h*h));
    }
    return (<>
        <h1>BMI Calculator</h1> 
        Weight : <input ref={w_inputRef}/> kg. <br></br>
        Height : <input ref={h_inputRef}/> cm.   <br></br>
        <button onClick={calBmi}>Calculate!</button> <br></br>
        Bmi : {bmi.toFixed(2)}
        <BmiText bmi={bmi}/>
    </>);
}