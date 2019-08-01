/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {useStateValue} from "./Context";
import Child from "./Child"
const styles = css`
  font-size: 14px;
  color: grey;
  line-height: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  p,
  h2,
  h3,
  button {
    padding: 0;
    margin: 0;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .parent {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .child {
    box-shadow: 0 0 3px 0 grey;
    padding: 1rem;
    margin-bottom: 2rem;
    button {
      background: grey;
      border: none;
      border-radius: 3px;
      margin-top: 1rem;
      font-size: 1rem;
      padding: 0.25rem 1rem;
      color: white;

      font-weight: 700;
    }
  }
  .grand-child {
    font-size: 10px;
    color: tomato;
  }
   
 
`;





const Parent = () => {
  const {state,dispatch} = useStateValue()
    const handleClick = (event, key) => {
      switch (key) {
        case "001":
          return dispatch({ type: "UPDATE_ONE" });
        case "002":
          return dispatch({ type: "UPDATE_TWO" });
        case "003":
          return dispatch({ type: "UPDATE_THREE" });
      }
    };
  return (
    <aside css={styles}>
      <header className="parent">
        <h2> useContext and useReducer </h2>
        <p>For State Management With Props</p>
      </header>
      <div className="parent-body">
        <Child
          state={state.one}
          key={"001"}
          index="001"
          handleClick={handleClick}
        />
        <Child
          state={state.two}
          key={"002"}
          index="002"
          handleClick={handleClick}
        />
        <Child
          state={state.three}
          key={"003"}
          index="003"
          handleClick={handleClick}
        />
      </div>
    </aside>
  );
};

export default Parent;
