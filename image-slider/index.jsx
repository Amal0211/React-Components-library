import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './style.css';
export default function ImageSlider({url, limit=5}){
    const [loading,setLoading]=useState(false);
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errmsg,setErrmsg]=useState(null);

    async function fetchImage(getUrl){
    try{
    setLoading(true);
    const response=await fetch(`${getUrl}?page=1&limit=${limit}`);
    const data=await response.json();
    if(data){
        const preloadedImages=await Promise.all(data.map(imageItem=> preload(imageItem.download_url)))
        setImages(preloadedImages)
        setLoading(false);    
    }
    }
    catch(err){
        console.log(err)
        setErrmsg(err.message);
        setLoading(false);
    }
}
    function preload(url){
        const img=new Image();
        img.src=url;
        return new Promise((resolve,reject)=>{
            img.onload=resolve(url)
            img.onerror=reject(new Error("error occured"));
        }) 
    }
    useEffect(()=>{
        if(url !== ""){
        fetchImage(url);}
    },[url]);

    if(loading){
        return (
            <div>Loading data...</div>
        )
    }
    if(errmsg !==null){
        return(<div>Error Haii!!!</div>)
    }
    const nextSlide=()=>{
        setCurrentSlide((prevSlide)=>(prevSlide + 1) % images.length)
    }    
    const prevSlide=()=>{
        setCurrentSlide((prevSlide)=>(prevSlide === 0 ? images.length - 1 : prevSlide - 1 ));
    }
    return(
        <div className="main-container"> 
            <BsArrowLeftCircleFill className="arrowToLeft" onClick={prevSlide} />
            <BsArrowRightCircleFill className="arrowToRight" onClick={nextSlide}/>
            {
                images && images.length>0 ?
                    <div key={images[currentSlide].id} className="image-container">
                    <img src={images[currentSlide]}></img> 
                    </div>: null
                
                
            }
        </div>
    )
}