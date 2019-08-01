import React from 'react';
 
const GreatGrandChild = ({state} ) => {   
    return (
      <aside className="great-grand-child">
        <header>
          <h2>Great Grand Child State = {state}</h2>
        </header>
      </aside>
    );
}

export default GreatGrandChild;