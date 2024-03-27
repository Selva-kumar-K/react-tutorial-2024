import { useState } from "react"
import Button from "./components/Button"
import Alert from "./components/ListGroup"
// import ListGroup from "./components/ListGroup"
import { BiAlarm } from "react-icons/bi";
import styles from "./app.module.css"
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {

  const [state, setState] = useState(false)

  const [input, setInput] = useState("")
  const [product, setProducts] = useState(['Product1', 'Product2', 'Product3'])
  const [bug, fixBugs] = useState([{
    id: 1,
    title : 'Error in line 10',
    fixed : 'Need to fix'
  },

  {
    id: 2,
    title : 'Error in line 4',
    fixed : 'Need to fix'
  },

  {
    id: 3,
    title : 'Error in line 9',
    fixed : 'Need to fix'
  }])

  // const items = [
  //   'Singapore', 'Malaysia', 'Thailand', 'Cananda', 'Germany'
  // ]

  // const handleSelectItems = (item: string) => {
  //   console.log(item)
  // }

  const handleClick = () => {

    fixBugs(bug.map(b => ({...b, fixed : "Fixed issue"})))
    // console.log(bug)
  }

  const handleBackend = async() => {
    await fetch("http://localhost:4000").then((response) => response.json()).then((data) => console.log(data))

  }

  const handleFrontend = () => {

    const reqOptions = {

      method : 'POST',
      headers : {
        'Content-Type' : 'Application/json'},
      body : JSON.stringify({data : input})
    }

    fetch("http://localhost:4000/users", reqOptions).then((response) => response.json()).then((data) => console.log(data))
  }

  return(
  <>
  {/* <ListGroup items={items} heading="Cities" onSelectItems={handleSelectItems}/> */}

  {state && <Alert onClose={() => setState(false)}>
    My Alert
    </Alert>}
  
  <Button color="danger" onClick={() => setState(true)}>
    My button
  </Button>

  <BiAlarm color="red" size="55"/>
  <button className={styles.btn}>This is button</button>
  <Like/>

  {bug.map(bug => <p key={bug.id}>{bug.title} : {bug.fixed}</p>)}

<button onClick={handleClick}>Click to fix All bugs</button>

<Navbar cartItemsCount={product.length}/>
<ProductList products={product} onClear={() => setProducts([])}/>

<button onClick={handleBackend}>Get Data from Backend</button>

<input type="text" onChange={(e) => setInput(e.target.value)}/>
<button onClick={handleFrontend}>Click to send to backend</button>
  </>
  )
}

export default App