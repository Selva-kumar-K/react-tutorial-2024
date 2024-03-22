import ListGroup from "./components/ListGroup"

const App = () => {
  const items = [
    'Singapore', 'Malaysia', 'Thailand', 'Cananda', 'Germany'
  ]

  return(
  <>
  <ListGroup items={items} heading="Cities"/>
  </>
  )
}

export default App