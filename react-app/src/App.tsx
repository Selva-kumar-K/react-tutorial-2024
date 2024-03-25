import { useState } from "react"
import Button from "./components/Button"
import Alert from "./components/ListGroup"
import ListGroup from "./components/ListGroup"
import { BiAlarm } from "react-icons/bi";
import styles from "./app.module.css"
import Like from "./components/Like";
const App = () => {

  const [state, setState] = useState(false)
  // const items = [
  //   'Singapore', 'Malaysia', 'Thailand', 'Cananda', 'Germany'
  // ]

  // const handleSelectItems = (item: string) => {
  //   console.log(item)
  // }

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
  </>
  )
}

export default App