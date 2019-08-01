/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {useEffect} from "react"
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
 import { useStateValue } from "./Context";
 import StateDisplay from "./GreatGrandChild";
const styles = css`
  border: 1px solid grey;
  background: rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  font-family: "Arial", sans-serif;
  h1,
  h2,
  p,
  aside,
  header {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  .state {
    background: cornflowerblue;
    color: white;
    font-family: "Verdana";
    padding: 0.5rem 1rem;
    display: inline-block;
    font-size: 12px;
    border-radius: 5px;
    margin-left: 1rem;
  }
  .parent-header{
    margin-bottom: 2rem;
  }
  .parent-body {
    padding-left: 2rem;
  }
  .grand-child{
    padding-left: 2rem;
    font-size:12px;
    color:grey;
  }
  .great-grand-child{
    padding-left:2rem;
    font-size: 10px;
    padding-bottom: 2rem;
  }
  button{
    margin-bottom: 1.5rem;
  }
`;

 



const Parent = () => {
   console.log("PARENT ELEMENT RENDER")
         //  const renders = useRenderCount()
       const {state,dispatch } = useStateValue()
      
 
 
  return (
    <section css={styles}>
      <header className="parent-header">
        <h1>Parent Component State = {state.one} </h1>
        <button
          className="state"
          onClick={() => dispatch({ type: "UPDATE_ONE" })}
        >
          update state 1
        </button>
 
      </header>

      <ChildOne state={state.two} />
      <button
        className="state"
        onClick={() => dispatch({ type: "UPDATE_TWO" })}
      >
        update state 2
      </button>
      <ChildTwo state={state.three} />
      <button
        className="state"
        onClick={() => dispatch({ type: "UPDATE_THREE" })}
      >
        update state 3
      </button>
    </section>
  );
};

export default Parent;
