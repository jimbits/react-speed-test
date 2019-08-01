/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {useState,useEffect, useLayoutEffect} from 'react'
import uuid from 'uuid/v4'
const container = css `
   width:500px;
   margin: 0 auto;
`
const controls= css `
  display:flex;
  flex-direction:column;
  
  align-items:center;
  input, button{
      width:50%;
      margin: 0.5rem;
      font-size: 1.2rem;
  }
`

function Hooker (props){
    const [toDoText, setToDoText] =useState("")
    const [toDoList, setToDoList]= useState([])
    const [cleanUp, setCleanUp]= useState("clean up")
    const [newToDo, setNewToDo] =useState(null)
    const [count, setCount] = useState(toDoList.lenghth);
    useEffect(()=>{
        if(newToDo){
             setToDoList([
               ...toDoList,
               newToDo
             ]);
              setCount(toDoList.length);
        }
        return ()=>setCleanUp("Cleaned This Up "  + setToDoList.length)
    }, [newToDo])
    function addNewToDo(e){
       
        setTimeout(() => {
            
           setNewToDo({id:uuid(), todo:toDoText})
        }, 3000);
    
       setToDoText("")
    }
    return (
   <aside css={container}>
       
            <header><h3>Hooker</h3></header>
           <p>Number Of Items {count}</p>
           <div css={controls}>
           <input type="text" placeholder="test it" value={toDoText} onChange={(e)=> setToDoText(e.target.value)}/>
           <button onClick={addNewToDo}>add to do</button>
           </div>

           <div>
             {(toDoList.length === 0)? <p>there are no to dos</p>:toDoList.map((item)=> <p key={item.id}>{item.todo}</p>    )}
           </div>
   </aside>
        )
}

export default Hooker