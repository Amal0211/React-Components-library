import { useEffect } from 'react';
import './gallery.css';
import ImageSlider from './image-slider';
import AOS from 'aos';
export default function Gallery(){
    useEffect(()=>{
        AOS.init({duration:500})
    },[])
    return (
        <>
        <div className='bg'>
        <div className='flex' data-aos='fade-right'>
            We Build Rockets
            <ImageSlider/>
        </div>
        </div>
        </>
    )
}