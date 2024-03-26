interface Props {
    cartItemsCount : number
}

const Navbar = ({cartItemsCount} : Props) => {
  return (
    <div>

        <h2>Navbar {cartItemsCount}</h2>
    </div>
  )
}

export default Navbar