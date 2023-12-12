import { useContext } from "react";
import { ToggleTheme } from "../App";
import UseEffect from "./UseEffect";
import UseState from "./UseState";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2vh",
    margin:"2vh"
  }

  return(
    <div style={themeStyle}>
     HOLA------AMIGO
     <UseEffect></UseEffect>
     <UseState ></UseState>

    </div>
  )
}

export default UseContext;