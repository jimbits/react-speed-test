/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import GrandChild from './GrandChild';
 
 
const childStyles = css`
 
`;
 
const Child =   ({state,  index, handleClick})  => {
       
    return (
      <aside className="child">
        <header>
          <h2>Child One Component State {state}</h2>
        </header>
        <GrandChild state={state} />
        <button onClick={(e)=> handleClick(e,index)}>Incremtent It's Own State</button>
      </aside>
    );
} 

export default Child;