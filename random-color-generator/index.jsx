import { useState } from "react"
import './style.css';
export default function RandomColor(){
    const [color,setColor]=useState('#000000');
    function generatecolor(){
        const Random= `rgb(${randomcolorcode()},${randomcolorcode()},${randomcolorcode()})`
        setColor(Random);
    }
    function randomcolorcode(){
        return Math.floor(Math.random()*256);
    }
    function generatehexcolor(){
        const hexcode=`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0')}`;
        setColor(hexcode)
        
    }
    return (
        <div className="pageColor" style={{backgroundColor:color}}>
        <button className="generateButton" onClick={()=>{generatecolor()}}>Generate color</button>
        <button className="generatehexcode" onClick={()=>{generatehexcolor()}}>Generate Hex code</button>
        <div className="colorname">
            <h1>{color}</h1>
        </div>
        </div>
    )
}