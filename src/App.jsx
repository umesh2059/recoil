
import {useContext,useState} from "react"
import {countContext} from "./context"

function App(){
 return(
  <div>
    <RecoilRoot>
    <count/>
    </RecoilRoot>
  </div> 
 )
}
function Count(){
  return(
    <div>
      <CountRenderer/>
      <Buttons/>
    </div>
  )
}
function CountRenderer(){
  const count=useRecoilValue(countAtom)
  return (
    <div>
      <b>
          {count}
      </b>
    </div>
  )
}
function Buttons(){
  const [count,setCount]=useRecoilState(countAtom);
  console.log("buttons re-rendererd")

  return <div>
    <button onclick={()=>{
      setCount(count + 1)}}>increase</button>

    <button onclick={()=>{
      setCount(count - 1)}}>decreases</button>
  </div>
}
export default App;