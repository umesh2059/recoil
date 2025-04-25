
import {useContext,useState} from "react"
import {countContext} from "./context"

function App(){
  const [count,setCount]=useState(0);
 return(
  <div>
    <countContext.provider value={count}>
       <count setCount={setCount}/>
       </countContext.provider>
  </div> 
 )
}

function Count({setCount}){
  return(
    <div>
      <CountRenderer/>
      <Buttons setCount={setCount}/>
    </div>
  )
}