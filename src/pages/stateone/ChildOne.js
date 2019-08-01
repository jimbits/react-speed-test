/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import GrandChild from './GrandChild';
 
 
const childOneStyles = css`
   
    .state{
      background:lightseagreen;
    }
    .one-body{
      padding-bottom: 2rem;
      padding-left: 1rem;
    }
 
`;
 
const ChildOne =   ({state})  => {
        
 
      
 

    return (
      <aside>
        <header className="one-header">
          <h2>Child One Component State {state}</h2>
        </header>
        <div className="one-body">
          <GrandChild />
        </div>
      </aside>
    );
} 

export default ChildOne;