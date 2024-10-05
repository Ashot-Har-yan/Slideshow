import { useState } from "react";


const Slideshow = ({slides})=>{
    const [currentIndex,setCurrentIndex] = useState(0);
    
    const sliderStyles = {
        height:"100%",
        position:"relative",
    };
    const slideStyles = {
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${slides[currentIndex].url})`,
    };
    const rightArrowStyles = {
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"0px",
        fontSize:"45px",
        color:"white",
        zIndex:1,
        cursor:"pointer",
    };
    const leftArrowStyles= {
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        left:'0px',
        fontSize:'45px',
        color:'white',
        zIndex: 1,
        cursor:'pointer',
    };
 
    const imageLenghtStyles = {
        display:"flex",
        justifyContent:"center",
        fontSize:"30px",
    };
    const previous = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide?slides.length-1:currentIndex-1
        setCurrentIndex(newIndex);
    };
    const next = ()=>{
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide?0:currentIndex + 1
        
        setCurrentIndex(newIndex);
    };
    return(
        <div style = {sliderStyles} >
            <div style = {leftArrowStyles}  onClick={previous}><span>&lt;</span></div>
            <div style = {rightArrowStyles} onClick={next}><span>&gt;</span></div>
         <div style = {slideStyles}></div>
         <div style = {imageLenghtStyles}>
            <span>{currentIndex+1} / {slides.length}</span>
         </div>
         </div>
    )
}

export default Slideshow;
