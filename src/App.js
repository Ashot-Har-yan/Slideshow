import Slideshow from "./Slideshow";

const App = ()=>{
    const slides = [
        {url:"http://localhost:3000/image-1.jpeg"},
        {url:"http://localhost:3000/image-2.jpeg"},
        {url:"http://localhost:3000/image-3.jpeg"},
        {url:"http://localhost:3000/image-4.jpeg"},
        {url:"http://localhost:3000/image-5.jpeg"},
       
    ];
    const containerStyles = {
        width:"500px",
        height:"280px",
        margin:"0 auto",
    };
    const titleStyle = {
        fontSize:"30px",
        margin:"0 auto",
        textAlign:"center",
    };
    
    
    return(
        <div>
            <h2 style = {titleStyle}>Slideshow of Countries</h2>
            <div style={containerStyles}>
             <Slideshow slides = {slides} />
             </div>
        </div>
    );
};
export  default App;