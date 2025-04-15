import ProductCard from 'components/ProductCard'

interface ProductListProps {
  products: any[]
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  increaseQuantity,
  decreaseQuantity
}) => {
  return (
    <ul className="grid max-w-[800px] ss:grid-cols-auto-fit-250 sm:grid-cols-3 gap-8">
      {products.map((product) => (
        <li key={product.id} className="flex flex-col">
          <ProductCard
            {...product}
            addToCart={() => increaseQuantity(product.id)}
            removeFromCart={() => decreaseQuantity(product.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
