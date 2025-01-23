import { useState,useMemo } from "react";
var slowFunction=(num)=>{
    for (var slow=0;slow<10000000000;slow++)
    {
    return num*2;
    }
   
}

const UseMemo=()=>{
    var [num,setNum]=useState(0);
    var [dark,setDark]=useState(false);
    var styling={
        backgroundColor:dark? "black":"white",
        color:dark?"white":"black"
    }
    var doubleingUpANumber=useMemo(()=>{
        return slowFunction(num)
    },[num])
    return (
        <div style={styling}>
            <h3>This page is meant for UseMemo Hook!!</h3>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={()=>setDark(curTheme=>!curTheme)}>Toggle Theme</button>
            <h4 style={styling}>The number is {doubleingUpANumber}</h4>
        </div>
    )

}
export default UseMemo;