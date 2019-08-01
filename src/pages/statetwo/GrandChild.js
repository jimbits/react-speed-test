import React from 'react';
import GreatGrandChild from './GreatGrandChild';
 

const GrandChild = ({state}) => {
    
    
    return (
      <aside className="grand-child">
        <header>
          <h2>Grand Child State = {state}</h2>
        </header>
        <GreatGrandChild state={state}/>
      </aside>
    );
}

export default GrandChild;