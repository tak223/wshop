import {useSelector ,useDispatch } from "react-redux";
import { decrimentCounter, incrimentCounter } from './js/action/actionCounter';


function App() {
  const dispatch = useDispatch()
const counter = useSelector((state)=> state.count)
console.log(counter)
  return (
    <div className="App">

   <button onClick={ ()=> dispatch(incrimentCounter()) }> +</button>
 <p> {counter} </p>
   <button onClick={ ()=> dispatch(decrimentCounter()) } > -</button>

    </div>
  );
}

export default App;
