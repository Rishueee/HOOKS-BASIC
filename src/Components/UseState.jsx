import { useState } from "react";
import "../App.css"

function UseState(){
  const [Like,setlike] = useState(0);
  
  const handleAge = ()=>{
    setlike(Like+1);
  }

  return (
    <div>
      <h3>{Like}</h3>
      <button onClick={handleAge}>Like count</button>
    </div>
  );
}

export default UseState;