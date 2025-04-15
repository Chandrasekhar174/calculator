import React, { useEffect, useState } from 'react'
const App = () => {
    const symbole=['AC','⌫','%','/','7','8','9','*','4','5','6','-','1','2','3','+','e','0','.','='];
    const [val,setVal]=useState("");

    const handleClick=(ele)=>{
        if(ele==='AC')
        {
            setVal("");
        }
        else if(ele==='⌫'){
            setVal(val.slice(0,-1));
        }
        
        else if (ele === '=') 
        {
            try {
                const result = eval(val);
                setVal(result.toString());
            } catch (error) {
                setVal("Error");
            }
            if(val=='Error')
            {
                setVal("");
            }
        }
        else{
            setVal(val+ele);
        }
    }
    useEffect(()=>{
    
    },[val])
  return (
    <div id="calculator">
        <h1 id="display">{val||0}</h1>
        <div id="symbole">
            {symbole.map((ele,index)=>(
                <button key={index} onClick={()=>handleClick(ele)}>{ele}</button>
            ))}
        </div>
    </div>
  )
}

export default App;
