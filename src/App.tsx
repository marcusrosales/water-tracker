import { useState } from "react";

function App(){

  const [waters,changeWaters] = useState(0)
  
  let totalWaters = 0

  function clickFunc() {
    changeWaters(waters + 1)
  }

  return(<>
  <h2>Water Counter: {waters}</h2>
  

  <button onClick={clickFunc}
  >Drink</button>
  
  </>)
};  


export default App;