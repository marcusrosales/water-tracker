import { useState } from "react";

function App(){

  const [waters,changeWaters] = useState(0)
  

  function addFunc() {
    changeWaters(waters + 1)
  }
  function removeFunc() {
    changeWaters(waters - 1)
  }

  return(<>
  <h2>Water Counter: {waters}</h2>
  
    <div className="Inputdiv">
      <button onClick={addFunc} >Drink</button>
      <button onClick={removeFunc} >Throw Up</button>
    </div>

  
  </>)
};  


export default App;