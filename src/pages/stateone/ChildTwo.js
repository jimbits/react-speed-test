/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import GrandChild from "./GrandChild";
 
 
const childTwoStyles = css`
  .state {
    background: lightcoral;
  }
  .two-body {
    padding-bottom: 2rem;
    padding-left: 1rem;
  }
`;

const ChildTwo =  ({state} ) => {
 
  
  return (
    <aside>
      <header className="two-header">
        <h2>Child Two Component State= {state}</h2>
      </header>
      <div className="two-body">
        <GrandChild />
      </div>
    </aside>
  );
}  

export default ChildTwo;
