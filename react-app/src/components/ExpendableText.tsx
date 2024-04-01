import {useState } from "react"

interface Props {
    children : string;
    maxChars? : number;
}

const ExpendableText = ({children, maxChars = 100} : Props) => {

    const [showText, setShowText] = useState(false)

    if(children.length <= maxChars) return <p>{children}</p>

    const text = showText ? children : children.substring(0, maxChars)
    return <p>{text}...<button onClick={() => setShowText(!showText)}>{showText ? "Less" : "More"}</button></p>
//   return (
//     <div>
//       <p>{data}</p>
//       <button onClick={() => setShowText(!showText)}>{showText ? "Less" : "More"}</button>
//     </div>
//   )
}

export default ExpendableText