import {FaStar} from "react-icons/fa";
import './style.css'
import { useState } from "react";
export default function StarRating({noOfStars}){
    const [clickRating,setClickRating]=useState(0);
    const [hoverRating,setHoverRating]=useState(0);
    function handleclick(curIndex){
        setClickRating(curIndex);
    }

    function handleenter(curIndex){
        setHoverRating(curIndex)

    }
    function handleleave(){
        setHoverRating(0);

    }

    return(
        <div className="star-container">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index+=1;
                    return <FaStar key={index}
                    onClick={()=>{handleclick(index)}}
                    onMouseEnter={()=>{handleenter(index)}}
                    onMouseLeave={()=>{handleleave(index)}}
                    color={index <= (hoverRating || clickRating) ? "#ffc107" : "#e4e5e9"} // Highlight condittion
                    size={40}/>
                })
            
            }
        </div>
    )
}