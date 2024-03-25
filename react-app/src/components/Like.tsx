import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";


const Like = () => {
    const [color, setColor] = useState("")

    const [change, setChange] = useState(false)
  return (
    <div>
        <AiFillHeart color={`${change ? color : ''}`} onClick={() => {setColor("red") ; setChange(!change)}} size={44}/>
    </div>
  )
}

export default Like