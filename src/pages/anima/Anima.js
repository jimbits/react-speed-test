import React, {useState, useRef, useEffect} from 'react';
import  {TweenLite, TimelineMax }from "gsap"
 

function SlideOne (props) {
    return <span>Slide One</span>
}
function SlideTwo (props){
    return <span>Slide Two</span>
}
function SlideThree (){
    return  <span>I am Going to Be Your Slide Three</span>
}
function Anima (props){
    let slideRef = useRef(null);
    const [fade, setFade] = useState(0)
    const [fadeAnimation, setFadeAnimation] = useState(null)

   
useEffect(()=>{
   console.log("TWEEN CREATED")
   const tween = new TimelineMax({ repeat: -1, repeatDelay: 0.2 });
   tween.to(slideRef, 0.2, {color: "#ff0000", fontWeight:"bold" })
   tween.to(slideRef, 0.5, {color:"#000000", textDecoration:"underline"} )
    tween.to(slideRef, 0.2, { color: "#ff0000", borderTopColor: "#0000ff"  } );

  
}, [])
 

    function playAnima(){
     setFade(!fade)
  
   
    }

    function swapSlides(){
        
    }
    return (
        <section>
            <header>
                <h1>Cycling The Alps</h1>
           
            </header>
            <div>
               <p  ref={elem => slideRef=elem}>
                 connecting
               </p>
                <button onClick={playAnima}>make me anmimte</button>
            </div>
        </section>
     )
}

export default Anima