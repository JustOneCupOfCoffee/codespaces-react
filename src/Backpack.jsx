import { useState } from "react";

function Item({name}){
    const [pack,setPack]=useState(false);
    if(pack%4==0)
        return (<li onClick={()=>setPack(pack+1)}>{name}✅</li>);
        if(pack%4==1)
        return (<li onClick={()=>setPack(pack+1)}>{name}⌛</li>);
            if(pack%4==2)
        return (<li onClick={()=>setPack(pack+1)}>{name}❌</li>);
                if(pack%4==3)
        return (<li onClick={()=>setPack(pack+1)}>{name}🚫</li>);
}

export default function Backpack() {
    const items=["Portable Issac Newton","Powerbank","Notebook (PC)","IPAD","Particles Accelerator"];
    const filterList=items.filter(i=>i.includes("D"))
    return (<>
    <h1>Backpack List</h1>
    <ol>

        {filterList.map(i=><Item name={i}/>)}

        </ol>
        </>);
}