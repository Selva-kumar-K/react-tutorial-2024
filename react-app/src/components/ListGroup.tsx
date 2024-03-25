// import { useState } from "react";

import { ReactNode } from "react"

// interface Props {
//   items: string[];
//   heading: string;
//   onSelectItems: (item : string) => void;
// }

// const ListGroup = ({ items, heading, onSelectItems }: Props) => {
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   return (
//     <>
//       <h1>{heading}</h1>

//       {items.length === 0 && <p>No items found</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             key={item}
//             className={`list-group-item ${
//               selectedIndex === index ? "active" : ""
//             }`}
//             onClick={() => {
//               setSelectedIndex(index) 
//               onSelectItems(item)
//             }}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ListGroup;


interface Props {
  children : ReactNode;
  onClose: () => void;
}

const Alert = ({children, onClose} : Props) => {
  return(
    <>
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
      </div>
    </>
  )
}

export default Alert