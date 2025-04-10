import { Product } from 'data/menuData'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, description, available } = product

  return (
    <div className="grid gap-10 relative">
      <div className="grid">
        <p className="heading3">{name}</p>
        <p className=" text-rose-500 text-sm">{description}</p>
        <span className="text-primary text-base font-semibold ">
          ${price.toFixed(2)}
        </span>

        {available ? (
          <button className="button cart-btn">Add to Cart</button>
        ) : (
          <button className="buttonc" disabled>
            Not available
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
