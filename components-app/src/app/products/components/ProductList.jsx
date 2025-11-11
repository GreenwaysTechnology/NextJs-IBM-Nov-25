// import { PRODUCTS } from "../data/products";
import { PRODUCTS } from '@/app/products/data/products'

export default function ProductList() {
    return <div>
        <h1>ProductList</h1>
        <ul>
            {
                PRODUCTS.map(product => <li key={product.id}>
                    <span>
                        {product.id}
                    </span>
                    <span>
                        {product.name}
                    </span>
                    <span>
                        {product.price}
                    </span>
                </li>)
            }
        </ul>
    </div>
}