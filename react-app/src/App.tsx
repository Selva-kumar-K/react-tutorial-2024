// import { useState } from "react"
// import Button from "./components/Button"
// import Alert from "./components/ListGroup"
// import './App.css'
// // import ListGroup from "./components/ListGroup"
// import { BiAlarm } from "react-icons/bi";
// import styles from "./app.module.css"
// import Like from "./components/Like";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
// import SuperCard from "./components/SuperCard";
// import ExpendableText from "./components/ExpendableText";
// import Form from "./components/Form";

import { useState } from "react"
import ProjectForm from "./components/ProjectForm"
import Expense from "./expense-tracker/components/Expense"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"

// const App = () => {

//   // const [state, setState] = useState(false)
//   // const [game, setGame] = useState({
//   //   id: 1,
//   //   player : {
//   //     name : 'John'
//   //   }
//   // })

//   // const [cart, setCart] = useState({
//   //   discount : .1,
//   //   items : [
//   //     {id : 1, title : 'Iphone', quantity : 1},
//   //     {id : 2, title : 'Mac', quantity : 1}
//   //   ]
//   // })

//   // const [pizza, setPizza] = useState({
//   //   name : 'Margherita',
//   //   toppings : ['Double Cheese']
//   // })

//   // const [input, setInput] = useState("")
//   // const [product, setProducts] = useState(['Product1', 'Product2', 'Product3'])
//   // const [bug, fixBugs] = useState([{
//   //   id: 1,
//   //   title : 'Error in line 10',
//   //   fixed : 'Need to fix'
//   // },

//   // {
//   //   id: 2,
//   //   title : 'Error in line 4',
//   //   fixed : 'Need to fix'
//   // },

//   // {
//   //   id: 3,
//   //   title : 'Error in line 9',
//   //   fixed : 'Need to fix'
//   // }])

//   // const items = [
//   //   'Singapore', 'Malaysia', 'Thailand', 'Cananda', 'Germany'
//   // ]

//   // const handleSelectItems = (item: string) => {
//   //   console.log(item)
//   // }

//   const handleClick = () => {

//     fixBugs(bug.map(b => ({...b, fixed : "Fixed issue"})))
//     // console.log(bug)
//   }

//   const handleBackend = async() => {
//     await fetch("http://localhost:4000").then((response) => response.json()).then((data) => console.log(data))

//   }

//   const handleFrontend = () => {

//     const reqOptions = {

//       method : 'POST',
//       headers : {
//         'Content-Type' : 'Application/json'},
//       body : JSON.stringify({data : input})
//     }

//     fetch("http://localhost:4000/users", reqOptions).then((response) => response.json()).then((data) => console.log(data))
//   }

//   const handleGame = () => {
//     setGame((g) => ({...g, player: {...g.player, name : 'Selva'}}))
//   }

//   const handlePizza = () => {
//     setPizza({...pizza, toppings : [...pizza.toppings, 'Crispy Onion']})
//     console.log(cart)
//   }

//   const handleCart = () => {
//     setCart({...cart, items : cart.items.map((d) => d.id === 1 ? {...d, quantity : d.quantity + 1} : d)})
//   }

//   return(
//   <>
//   {/* <ListGroup items={items} heading="Cities" onSelectItems={handleSelectItems}/> */}

//   {state && <Alert onClose={() => setState(false)}>
//     My Alert
//     </Alert>}
  
//   <Button color="danger" onClick={() => setState(true)}>
//     My button
//   </Button>

//   <BiAlarm color="red" size="55"/>
//   <button className={styles.btn}>This is button</button>
//   <Like/>

//   {bug.map(bug => <p key={bug.id}>{bug.title} : {bug.fixed}</p>)}

// <button onClick={handleClick}>Click to fix All bugs</button>

// <Navbar cartItemsCount={product.length}/>
// <ProductList products={product} onClear={() => setProducts([])}/>

// <button onClick={handleBackend}>Get Data from Backend</button>

// <input type="text" onChange={(e) => setInput(e.target.value)}/>
// <button onClick={handleFrontend}>Click to send to backend</button>
// <br></br>
// <h2>{game.player.name}</h2>
// <button onClick={handleGame}>Click to change the player name</button>
// <br></br>

// <h2>{pizza.toppings}</h2>
// <button onClick={handlePizza}>Click to add toppings</button>
// <br/>
// <h3>{cart.items.map((d) => d.id == 1 && d.quantity)}</h3>
// <button onClick={handleCart}>Add Quantity +</button>

// <ExpendableText maxChars={20}>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis quod minus beatae suscipit quae. Earum ex, cumque ipsum consequuntur porro dolores voluptate neque obcaecati natus eum. Commodi, rerum similique.
//   Harum, itaque voluptate cum corrupti cupiditate earum doloremque vitae assumenda, dolor nam autem mollitia temporibus quos, ducimus facere. Voluptates adipisci atque nam corporis optio quaerat libero dolores magnam exercitationem aut?
//   Deleniti dolorum at fugiat dolor quasi facilis tenetur. Ducimus adipisci vitae perferendis sunt? Cupiditate, neque nobis mollitia provident doloremque eaque voluptate qui dicta numquam laboriosam modi reprehenderit at, temporibus culpa?
//   Sit, neque tempora dignissimos, consequuntur sed nihil explicabo praesentium hic delectus quaerat aspernatur nostrum cupiditate quisquam accusantium? Labore commodi recusandae repellendus voluptatem neque facere quaerat, a explicabo ad fugiat dolore?
//   Voluptatum quisquam itaque voluptates, excepturi beatae, laborum ducimus id sunt nemo ad quae qui fugit, sint pariatur laudantium harum dolorum amet optio nobis repudiandae quis iusto fuga temporibus dignissimos? Magni!
//   Nulla, ab magnam autem ratione, adipisci fugiat nobis explicabo laudantium voluptas, suscipit earum reiciendis mollitia consequuntur harum iste amet! Deleniti quas commodi earum! Officiis in magnam esse ad excepturi itaque?
//   Saepe eaque eligendi tenetur. Assumenda officia iste libero sed placeat ipsum, hic exercitationem, magni ex id blanditiis beatae asperiores facere natus dolores nulla impedit! Labore blanditiis quis recusandae facere esse!
//   Minima assumenda sit nam fugiat quibusdam voluptatibus perspiciatis porro magni, obcaecati repellendus ratione eligendi, iure veniam alias explicabo similique, aspernatur ducimus minus. Ratione necessitatibus impedit quaerat sunt perspiciatis dolores consectetur?
//   Error doloribus consequatur explicabo, id odit rerum ex temporibus, dignissimos labore unde quidem repellat sequi aliquam nobis eum rem accusamus ducimus eius dolorum quasi. Nihil aliquid accusantium quam consequuntur molestias.
//   Dolorem minima ullam accusamus! Quisquam officia rem eaque culpa beatae ducimus totam iure harum commodi nam distinctio esse magni placeat, earum ratione repudiandae suscipit, dolor laborum quae laboriosam expedita quam.
// </ExpendableText>

// <Form/>


//   </>
//   )
// }

// export default App

const App = () => {

  const [items,setItems] = useState([
    {id : 1, description : "aaa", amount : 23, category : 'Utilities'},
    {id : 2, description : "bbb", amount : 10, category : 'Groceries'},
    {id : 3, description : "ccc", amount : 10, category : 'Groceries'},
    {id : 4, description : "ddd", amount : 10, category : 'Utilities'}
  ])
  const [selectCategory, setSelectCategory] = useState('')

  const visibleExpenses = selectCategory ? items.filter((d) => d.category === selectCategory) : items

  return(
    <>
    <ExpenseFilter onSelect={(e) => setSelectCategory(e)}/>
    <Expense expense={visibleExpenses} onDelete={(id => setItems(items.filter(d => d.id !== id)))}/>
    </>
  )
}

export default App