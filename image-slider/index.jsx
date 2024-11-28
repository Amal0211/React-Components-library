import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './style.css';
import AOS from 'aos';
import g1 from '../Pictures/g1.jpg';
import g2 from '../Pictures/g2.jpg';
import g3 from '../Pictures/g3.jpg';
import g4 from '../Pictures/g4.jpg';
import g5 from '../Pictures/g5.jpg';
import g6 from '../Pictures/g6.jpg';
import g7 from '../Pictures/g7.jpg';
import g8 from '../Pictures/g8.jpg';
import g9 from '../Pictures/g9.jpg';
import g10 from '../Pictures/g10.jpg';
import g12 from '../Pictures/g11.jpg';
import g11 from '../Pictures/g12.jpg';
import g13 from '../Pictures/g13.jpg';
import g14 from '../Pictures/g14.jpg';

export default function ImageSlider(){
    const [images,setImages]=useState([g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14]);
    const [currentSlide,setCurrentSlide]=useState(0);
    useEffect(()=>{
        AOS.init({duration: 500})
    },[])
    
    const nextSlide=()=>{
        setCurrentSlide((prevSlide)=>(prevSlide + 1) % images.length)
    }    
    const prevSlide=()=>{
        setCurrentSlide((prevSlide)=>(prevSlide === 0 ? images.length - 1 : prevSlide - 1 ));
    }
    const handleThumbnailIndex=(index)=>{
        setCurrentSlide(index);
    }
    useEffect(()=>{
        const slideInterval=setInterval(()=>{nextSlide();},3000)
    },[]);
    return(
        <div className="main-container"> 
            <BsArrowLeftCircleFill className="arrowToLeft" onClick={prevSlide} />
            <BsArrowRightCircleFill className="arrowToRight" onClick={nextSlide}/>
            {
                images && images.length>0 ?
                    <div key={currentSlide} className="image-container" >
                    <img src={images[currentSlide]} alt={`Slide ${currentSlide}`}></img> 
                    </div>: null
                
                
            }

        <div className="thumbnail-container">
            {
                images.map((image,index)=>(
                    <img
                        key={index}
                        src={image}
                        className={`thumbnail ${index===currentSlide ? 'active' : ""}`}
                        onClick={()=>{handleThumbnailIndex(index)}}
                    ></img>
                ))
            }
            </div>
        </div>
    )
}