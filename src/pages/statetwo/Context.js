import React, {   useContext, useReducer } from "react";



const initialState = { one: 1, two: 2, three: 3 };




const StateContext = React.createContext(initialState);

let reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "UPDATE_ONE":
      return Object.assign({}, state, {one: state.one + 1})
    case "UPDATE_TWO":
       return Object.assign({}, state, { two: state.two + 1 });
    case "UPDATE_THREE":
      return Object.assign({}, state, { three: state.three + 1 });
    default:
      return { count: "default" };
  }
};

function StateProvider( props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{state, dispatch}}>
      {props.children}
    </StateContext.Provider>
  );
}
 

const useStateValue = () => useContext(StateContext);
export { StateContext, StateProvider, useStateValue };
