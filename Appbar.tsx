
import {useState} from "react";
import One from "./One.tsx"
import Dos from "./Two.tsx"

export default function Ui(){
    const [show,SetShow] = useState("Uno")

   

return(
<div>
    <p>Halo Magnum</p>
    <button onClick={()=> SetShow("Uno")}>Uno</button>
    <button onClick={()=> SetShow("Dos")}>Dos</button>

    <div>
        {show === "Uno" && <One/>}
        {show === "Dos" && <Dos/>}
    </div>
</div>

)
    
    
}