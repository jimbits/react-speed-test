import React from 'react';
import GreatGrandChild from './GreatGrandChild';
 

const GrandChild = () => {
    
    
    return (
      <aside className="grand-child">
        <header>
          <h2>Grand Child Component</h2>
        </header>
        <GreatGrandChild/>
      </aside>
    );
}

export default GrandChild;