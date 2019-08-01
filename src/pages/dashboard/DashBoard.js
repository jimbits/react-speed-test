import React, { useRef, useEffect, useState } from "react";
import Button from "components/Button";
import { TweenMax } from "gsap";
 
import "./style.scss";

function DashBoard(props) {
  let an = useRef(null);
  const [fade, setFade] = useState(null)
  const [opacity,setOpacity]=useState(0)
  const [dir, setDir] = useState(-900)
 
 

 
 
 // take out the dir dependancy and see what happens to the use reducer effect...
  useEffect(() => {
    console.log("new")
      setFade(TweenMax.to(an, 0.3, { x: dir }));
  },[dir] );
 

  function animate( ) {
    if(fade !==null ){
     fade.play()
    }
 
    setDir(-900)
  
  }
function test(){
   setDir(0);
}
 
  

  return (
    <div>
      <div className="dashboard" ref={elem => (an = elem)}>
        <h1>DashBoard Application</h1>
        <h3>Current Value </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          perferendis! Excepturi odit, doloribus fugiat quod obcaecati sunt esse
          praesentium. Placeat cumque labore harum doloribus! Expedita quo atque
          asperiores aliquam sit?
        </p>
      </div>
      <nav className="button-options">
        <Button onClick={() => test()}>show</Button>
        <Button onClick={() => animate()}>hide</Button>
      </nav>
    </div>
  );
}

export default DashBoard;
