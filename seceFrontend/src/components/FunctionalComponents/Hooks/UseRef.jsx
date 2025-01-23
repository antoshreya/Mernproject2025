import {useState,useRef,useEffect} from "react";
const UseRef=()=>{
    var [text,setText]=useState("hello")
    var prevRender=useRef()
    useEffect(()=>{
        console.log(prevRender.current)
        prevRender.current=text
    },[text])
    return(
        <div>
            <h1>This page is meant for useRef Hook.</h1>
            <input type="text"value={text} onChange={(e)=>setText(e.target.value)} />
            <h4>The text is {text}</h4>
            <h5>The previous Render text is {prevRender.current}</h5>
        </div>
    )
}
export default UseRef;