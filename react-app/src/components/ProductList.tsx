
interface Props {
    products : string[];
    onClear : () => void;
}

const ProductList = ({products, onClear} : Props) => {
  return (
    <div>
        <h2>Product Lists</h2>
        <ul>
            {products.map((product) => (
                <li>{product}</li>
            ))}
        </ul>

        <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default ProductList