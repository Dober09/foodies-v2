import menu from "../images/menu.png";
import close from "../images/close.png"
import { useState } from "react";
export default function Menubtn(){
    const [counter,setCounter] = useState(0)
    const handleClick = ()=>{
        // setCounter()
        setCounter(counter+1)
        console.log(counter)
    }
    
    return (
        <div className=" bg-lightblack  w-10 p-3 rounded-md shadow-gray shadow-lg" onClick={handleClick} >
            <img src={ counter%2===0 ? menu:close} alt="menu" className="w-6 h-4" />
        </div>
    )
}